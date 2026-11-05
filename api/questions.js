import { questions, totalPoints } from '../lib/questions.js';
export default function handler(req, res) {
  if (req.method !== 'GET') { res.setHeader('Allow', 'GET'); return res.status(405).json({ error: 'Metoda niedozwolona.' }); }
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ questions: questions.map(({id, type, question, options, points}) => ({id,type,question,options,points})), totalPoints });
}
