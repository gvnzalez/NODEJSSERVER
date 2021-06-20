const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/contact-us', (req, res) => {
    res.send('This is a email');
});

app.listen(port, () => {
 console.log(`Server listening on http://localhost:${port}`);
});