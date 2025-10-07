import express, { Request, Response } from 'express';
import { Works } from './data/works.js';
//import { Work, WorkInput, Form } from '@johndifelice/types';
import { Work, WorkInput, WorkSchema } from './types.js';
import pdfRouter from './routes/pdf.js'
import cors from 'cors';
import { z } from "zod";

console.log("✅ File loaded");

const app = express();

//app.use(cors({ origin: 'http://localhost:5173', credentials: false }));
app.use(cors({ origin: ["https://myapp-server.onrender.com"], credentials: true }));
app.use(express.json());
app.use('/api', pdfRouter);

const PORT = process.env.PORT || 3000;

app.get('/api/works', async(_req:Request<{}, Work[], WorkInput,{}>, res:Response<Work[]>) => {
    //res.set("Cache-Control", "public, max-age=31536000, immutable");
    res.json(Works);
});

app.get('/api/works/:form', async(_req:Request<{form: string}, Work[], {}>, res:Response<Work[]>) => { 
    console.log('in Express function');
    try {
        const results: Work[] | undefined = 
        //z.array(WorkSchema).parse( 
            Works.filter(w => w.form.toString() === _req.params.form).sort(function (a, b) { 
                return ('' + a.title).localeCompare(b.title); 
            });
            
        //); 
        console.log(Works);
        //res.set("Cache-Control", "public, max-age=31536000, immutable");
        res.set("Cache-Control", "public, max-age=0, immutable");
        res.json(results); 
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});