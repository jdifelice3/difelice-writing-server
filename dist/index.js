import express from 'express';
import { Works } from './data/works.js';
import pdfRouter from './routes/pdf.js';
import cors from 'cors';
console.log("✅ index.js loaded");
const app = express();
console.log("✅ app = express()");
//app.use(cors({ origin: ["https://myapp-server.onrender.com"], credentials: true }));
// Fully open CORS for public content (no credentials)
app.use(cors()); // sets Access-Control-Allow-Origin: *
app.options(/.*/, cors()); // respond to preflight immediately
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
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
    console.log("External URL:", process.env.RENDER_EXTERNAL_URL || "(not set)");
});
