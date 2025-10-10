import express, { Request, Response } from 'express';
import { Works } from './data/works.js';
//import { Work, WorkInput, Form } from '@johndifelice/types';
import { Work, WorkInput, WorkSchema } from './types.js';
import pdfRouter from './routes/pdf.js'
import cors from 'cors';
import { z } from "zod";

console.log("✅ index.js loaded");

const app = express();

console.log("✅ app = express()");

//app.use(cors({ origin: ["https://myapp-server.onrender.com"], credentials: true }));
// Fully open CORS for public content (no credentials)
app.use(cors());                     // sets Access-Control-Allow-Origin: *
app.options(/.*/, cors());           // respond to preflight immediately

console.log("✅ CORS implemented");

app.use(express.json());
app.use('/api', pdfRouter);

console.log("✅ Middleware loaded");

//const PORT = process.env.PORT || 3000;

//console.log(`✅ PORT: ${PORT}`);

app.use((req, _res, next) => {
  console.log(`[REQ] ${req.method} ${req.url}`);
  next();
});

app.get("/health", (_req, res) => res.status(200).send("ok"));

app.get('/api/works', async(_req:Request<{}, Work[], WorkInput,{}>, res:Response<Work[]>) => {
    //res.set("Cache-Control", "public, max-age=31536000, immutable");
    res.json(Works);
});

app.get('/api/works/:form', async(_req:Request<{form: string}, Work[], {}>, res:Response<Work[]>) => { 
    console.log('in Express function');
    try {
        const results: Work[] | undefined = 
            Works.filter(w => w.form.toString() === _req.params.form).sort(function (a, b) { 
                return ('' + a.title).localeCompare(b.title); 
            });
            
        res.set("Cache-Control", "public, max-age=0, immutable");
        res.json(results); 
    } catch (err) {
        console.log(err);
    }
});

// catches 404s and redirects to the homepage.
app.use((req, res, next) => {
  res.redirect('/');
});

console.log("✅ Express.js APIs set");

const PORT = Number(process.env.PORT) || 3000;

if(process.env.NODE_ENV == 'production'){
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server listening on http://0.0.0.0:${PORT}`);
        console.log("External URL:", process.env.RENDER_EXTERNAL_URL || "(not set)");
    });
} else {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}