const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Ahoy!');
});

app.get('/shravan', (req, res) => {
    res.send('Ahoy, This is Shravan!');
});


app.get('/raahel', (req, res) => {
    res.send('This is the best endpoint in the world');
});

app.get('/hello', (req, res) => {
    res.send('Hello');
});
