const express = require('express');
const app = express();
const port = 3000;

// Middleware für JSON-Parsing
app.use(express.json());

// Einfache Render-Funktion
app.post('/render', (req, res) => {
    const data = "Hello WOrld";
    if (!data) {
        return res.status(400).json({ error: 'Kein Inhalt zum Rendern angegeben' });
    }
    const renderedContent = `<html><body><h1>${data}</h1></body></html>`;
    res.send(renderedContent);
});

// Server starten
app.listen(port, () => {
    console.log(`Render API läuft auf http://localhost:${port}`);
});
