const express = require('express');
const budget = require('./models/budget')
const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public'))

//MIDD

app.use(express.urlencoded({ extended: false }))

//Routes

//Index
app.get('/budgets', (req, res) => {
    res.render('index.ejs', {budget: budget})
})

//New
app.get('/budgets/new', (req, res) => {
    res.render('new.ejs')
})

//Create
app.post('/budgets', (req, res) => {
    budget.push(req.body);
    // console.log(budget);
    res.redirect('/budgets')
})

//Show
app.get('/budgets/:index', (req, res) => {
    res.render('show.ejs', {budget: budget[req.params.index]})
})
//port
app.listen(port, () => {
    console.log(`Listening on `, port)
})
