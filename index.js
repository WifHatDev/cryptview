const express = require('express');
const app = express();
const port = 3000;


let counter = 0;
setInterval(() => {
    counter++
}, 1000)
// GET-Route für einfache Textausgabe
app.get('/', (req, res) => {
    console.log("Anfrage erhalten!"); // Zeigt "Hallo Welt" in der Konsole
    res.send(counter.toString()); // Zeigt "Hallo Welt" im Webbrowser
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
