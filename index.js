const express = require('express');
const app = express();
const port = 3000;

// Middleware für JSON-Parsing
app.use(express.json());

// Einfache Render-Funktion
app.post('/render', (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ error: 'Kein Inhalt zum Rendern angegeben' });
    }
    const renderedContent = `<html><body><h1>${content}</h1></body></html>`;
    res.send(renderedContent);
});

// Server starten
app.listen(port, () => {
    console.log(`Render API läuft auf http://localhost:${port}`);
});
