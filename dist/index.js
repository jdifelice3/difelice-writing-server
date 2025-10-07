import express from 'express';
import { Works } from './data/works.js';
import pdfRouter from './routes/pdf.js';
import cors from 'cors';
console.log("✅ index.js loaded");
const app = express();
//app.use(cors({ origin: ["https://myapp-server.onrender.com"], credentials: true }));
// Fully open CORS for public content (no credentials)
app.use(cors()); // sets Access-Control-Allow-Origin: *
app.options("*", cors()); // respond to preflight immediately
console.log("✅ CORS implemented");
app.use(express.json());
app.use('/api', pdfRouter);
console.log("✅ Middleware loaded");
const PORT = process.env.PORT || 3000;
console.log(`✅ PORT: ${PORT}`);
app.get('/api/works', async (_req, res) => {
    //res.set("Cache-Control", "public, max-age=31536000, immutable");
    res.json(Works);
});
app.get('/api/works/:form', async (_req, res) => {
    console.log('in Express function');
    try {
        const results = 
        //z.array(WorkSchema).parse( 
        Works.filter(w => w.form.toString() === _req.params.form).sort(function (a, b) {
            return ('' + a.title).localeCompare(b.title);
        });
        //); 
        console.log(Works);
        //res.set("Cache-Control", "public, max-age=31536000, immutable");
        res.set("Cache-Control", "public, max-age=0, immutable");
        res.json(results);
    }
    catch (err) {
        console.log(err);
    }
});
console.log("✅ Express.js APIs set");
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
