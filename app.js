const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/home', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/pricing', (req, res) => {
    res.render('pricing', {queryString: req.query});
});

app.post('/pricing', urlencodedParser, (req, res) => {
        console.log(req.body);
        res.render('pricing-fix', {data: req.body});
});

app.get('/profile/:name/:id', (req, res) => {
    const data = [];
    res.render('profile', {user: req.params.name, id: req.params.id, data: data});
});

app.listen(3000);