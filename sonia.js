const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, world! Welcome to my Express server.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});

app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

app.get('/contact', (req, res) => {
    res.send('Contacts');
});