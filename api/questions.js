import {questions,totalPoints} from '../lib/questions.js';
export default function handler(req,res){if(req.method!=='GET')return res.status(405).json({error:'Metoda niedozwolona'});res.setHeader('Cache-Control','no-store');res.status(200).json({questions:questions.map(({correct,display,note,...rest})=>rest),totalPoints});}
