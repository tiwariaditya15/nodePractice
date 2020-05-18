const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile( __dirname + '/contact.html');
});

app.get('/pricing', (req, res) => {
    res.sendFile( __dirname + '/pricing.html');
});

app.get('/profile/:name/:id', (req, res) => {
    res.render('profile', {user: req.params.name, id: req.params.id});
});

app.listen(3000);