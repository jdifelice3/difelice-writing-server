export default function logRequest(req, res, next) {
    console.log('in logRequest');
    const start = Date.now();
    let logData = null;
    // Wait for the response to finish before logging
    res.on('finish', () => {
        console.log('info', 'Request completed', {
            method: req.method,
            url: req.originalUrl,
            statusCode: res.statusCode,
            durationMs: Date.now() - start,
        });
        const durationMs = Date.now() - start;
        logData = {
            timestamp: new Date().toISOString(),
            //userId: req.user?.id || req.user?.email || 'anonymous', // Adjust for your auth scheme
            //source: 'API',
            action: `${req.method} ${req.originalUrl}`,
            method: req.method,
            endpoint: req.originalUrl,
            statusCode: res.statusCode,
            durationMs: durationMs,
            errorText: res.statusCode >= 400 ? res.statusMessage : null,
            meta: {
                ip: req.ip,
                userAgent: req.get('User-Agent'),
                referer: req.get('Referer'),
                query: req.query,
                //body: req.body // ⚠️ make sure you use body-parser
            }
        };
        console.log(logData);
    });
    next(); // Pass control to the next middleware or route
}
