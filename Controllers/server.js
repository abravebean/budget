const express = require('express');
const app = express();

//              DATABASE
const budget= require('../Models/budget.js');




//new
app.get('/budget/new', (req, res) => {
    res.render('new.ejs');
   
  });
  

//          Route
app.get('/budget', (req, res) => {
    res.send(budget);
    res.render('index.ejs', {
      allbudget: allbudget,
      title: 'index'
  })
  });



// show route
app.get('/budgets/:index', (req, res) => {
    res.send(budget[req.params.id]);
  });
  
//post

app.post('/bakedgoods', (req, res) => {
 
    budget.push(req.body)
    res.redirect('/budgets') //send the user back to /bakedgoods
  })

app.listen(3002, () => {
    console.log('listening');
  });
