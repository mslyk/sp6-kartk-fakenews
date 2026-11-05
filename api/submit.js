import { questions, totalPoints } from '../lib/questions.js';
import { createHmac, timingSafeEqual } from 'node:crypto';

const thresholds = [[100,'6'],[95,'6-'],[89,'5+'],[83,'5'],[78,'5-'],[73,'4+'],[67,'4'],[62,'4-'],[57,'3+'],[51,'3'],[46,'3-'],[41,'2+'],[35,'2'],[30,'2-'],[25,'1+'],[0,'1']];
const normalized = name => name.normalize('NFKC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pl-PL');
const safe = str => String(str).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ntext = s=>String(s).normalize('NFKC').trim().toLocaleLowerCase('pl-PL').replace(/\s+/g,' ');
const valid = (q,a)=> {
 if(['single','short'].includes(q.type))return typeof a==='string' && a.length<=120;
 if(['multi','identify'].includes(q.type))return Array.isArray(a)&&a.length>=1&&a.length<=(q.options||q.parts).length;
 if(['match','order','classify','fill','tfgrid'].includes(q.type))return Array.isArray(a)&&a.length===(q.items||q.left||q.choices||[]).length&&a.every(Number.isInteger);
 return false;
};
const check=(q,a)=>{
 if(q.type==='short')return q.correct.some(x=>ntext(x)===ntext(a));
 if(q.type==='single')return a===String(q.correct);
 if(['multi','identify'].includes(q.type))return JSON.stringify([...a].sort((x,y)=>x-y))===JSON.stringify([...q.correct].sort((x,y)=>x-y));
 return JSON.stringify(a)===JSON.stringify(q.correct);
};
const label=(q,a)=>{
 if(q.type==='short')return String(a||'(brak)');
 if(q.type==='single')return q.options[Number(a)]||'(brak)';
 if(q.type==='multi')return a.map(i=>q.options[i]).join('; ');
 if(q.type==='identify')return a.map(i=>q.parts[i]).join('; ');
 if(q.type==='match')return q.left.map((x,i)=>x+' → '+(q.right[a[i]]||'?')).join(' | ');
 if(q.type==='order')return a.map(i=>q.items[i]).join(' → ');
 if(q.type==='classify')return q.items.map((x,i)=>x+' → '+(q.categories[a[i]]||'?')).join(' | ');
 if(q.type==='fill')return a.map((v,i)=>q.choices[i][v]||'?').join('; ');
 if(q.type==='tfgrid')return a.map((v,i)=>q.items[i]+' — '+(v===1?'Prawda':'Fałsz')).join(' | ');
 return '';
};
const solution=q=> q.type==='short'?q.display:label(q,q.type==='single'?String(q.correct):q.correct);
const complete=(q,a)=>{
 if(!valid(q,a))return false;
 if(q.type==='single')return /^\d+$/.test(a) && +a<q.options.length;
 if(q.type==='short')return a.trim().length>=1;
 if(['multi','identify'].includes(q.type)){let len=(q.options||q.parts).length;return a.every(i=>Number.isInteger(i)&&i>=0&&i<len)&&new Set(a).size===a.length;}
 if(q.type==='order')return a.every(i=>i>=0&&i<q.items.length)&&new Set(a).size===a.length;
 if(q.type==='match')return a.every(i=>i>=0&&i<q.right.length)&&new Set(a).size===a.length;
 if(q.type==='fill')return a.every((i,j)=>i>=0&&i<q.choices[j].length);
 if(q.type==='classify')return a.every(i=>i>=0&&i<q.categories.length);
 if(q.type==='tfgrid')return a.every(i=>i===0||i===1);
 return false;
};

async function redis(command) {
  const url=process.env.UPSTASH_REDIS_REST_URL, token=process.env.UPSTASH_REDIS_REST_TOKEN;
  const response=await fetch(url, {method:'POST',headers:{'Authorization':`Bearer ${token}`,'Content-Type':'application/json'},body:JSON.stringify(command),signal:AbortSignal.timeout(7000)});
  if (!response.ok) throw new Error('Błąd bazy wyników.');
  const data=await response.json();
  if (data.error) throw new Error('Błąd bazy wyników.');
  return data.result;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {res.setHeader('Allow','POST');return res.status(405).json({error:'Metoda niedozwolona.'});}
  const key=process.env.RESEND_API_KEY;
  const sender='Kartkowka <onboarding@resend.dev>';
  const recipient='magdalena.slyk@zstil.pl';
  if (!key) return res.status(503).json({error:'Nauczyciel nie skonfigurował wysyłania wyników. Skontaktuj się z nauczycielem.'});
  const {student, answers}=req.body || {};
  if (typeof student!=='string' || student.length>100 || !/^[\p{L}][\p{L} .'-]{2,99}$/u.test(student.trim()) || normalized(student).split(' ').length<2) return res.status(400).json({error:'Podaj poprawne imię i nazwisko.'});
  if (!Array.isArray(answers) || answers.length!==questions.length || !answers.every((a,i)=>complete(questions[i],a))) return res.status(400).json({error:'Odpowiedzi są niekompletne lub niepoprawne.'});
  const result=questions.map((q,i)=>{const a=answers[i];const ok=check(q,a);return {id:q.id,question:q.question,answer:label(q,a),correctAnswer:solution(q),earned:ok?q.points:0,points:q.points,correct:ok};});
  const points=result.reduce((s,r)=>s+r.earned,0), percent=Math.round(100*points/totalPoints), grade=thresholds.find(([min])=>percent>=min)[1];
  const cleanName=student.trim().replace(/\s+/g,' ');
  const locking=Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
  let lockKey, lockValue;
  if (locking) {
    // Jeden zapis na nazwę ucznia w ramach tej kartkówki. Niezależnie od urządzenia/przeglądarki.
    lockKey='quiz:fake-news-6b-2026-11-06:interactive-v3:'+createHmac('sha256',key).update(normalized(cleanName)).digest('hex');
    lockValue=cryptoRandomId();
    try {
      const locked=await redis(['SET',lockKey,lockValue,'NX','EX',60]);
      if (locked!=='OK') return res.status(409).json({error:'Wynik dla tego imienia i nazwiska został już wysłany lub jest przetwarzany. Skontaktuj się z nauczycielem.'});
    } catch {return res.status(503).json({error:'Nie można zweryfikować próby. Spróbuj ponownie.'});}
  }
  const timestamp=new Date().toLocaleString('pl-PL',{timeZone:'Europe/Warsaw'});
  const html=`<div style="font-family:Arial,sans-serif;color:#172033;max-width:720px"><h2>Kartkówka – fake news i wiarygodność informacji</h2><p><b>Uczeń:</b> ${safe(cleanName)}<br><b>Klasa:</b> 6b<br><b>Wysłano:</b> ${safe(timestamp)} (Warszawa)<br><b>Wynik:</b> ${points}/${totalPoints} pkt (${percent}%)<br><b>Ocena:</b> ${safe(grade)}</p><hr>${result.map((r,i)=>`<div style="padding:12px 0;border-bottom:1px solid #ddd"><b>${i+1}. ${safe(r.question)}</b> — ${r.earned}/${r.points} pkt<p>Odpowiedź ucznia: ${safe(r.answer)}</p><p>Poprawna odpowiedź: ${safe(r.correctAnswer)}</p></div>`).join('')}</div>`;
  try {
    const response=await fetch('https://api.resend.com/emails',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json'},body:JSON.stringify({from:sender,to:[recipient],subject:`Kartkówka fake news 6b – ${cleanName} – ${grade} (${percent}%)`,html}),signal:AbortSignal.timeout(12000)});
    const data=await response.json().catch(()=>({}));
    if (!response.ok || !data.id) throw new Error('Resend odmówił wysłania.');
    if (locking) {
      try {await redis(['SET',lockKey,'submitted','XX','EX',60*60*24*180]);}
      catch { /* Email już wysłany: nie zgłaszaj błędu i nie wymuszaj duplikatu. */ }
    }
    return res.status(200).json({sent:true,points,totalPoints,percent,grade,results:result});
  } catch (error) {
    if (locking) {try {const value=await redis(['GET',lockKey]);if(value===lockValue) await redis(['DEL',lockKey]);} catch { /* Lock wygaśnie samoistnie */ }}
    console.error('Wysyłka wyników nieudana:',error.message);
    return res.status(502).json({error:'Nie udało się wysłać wyników. Nie zamykaj strony — spróbuj ponownie.'});
  }
}
function cryptoRandomId(){return createHmac('sha256',process.env.RESEND_API_KEY).update(String(Date.now())+Math.random()).digest('hex');}
