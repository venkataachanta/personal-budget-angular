const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const budget = {
    myBudget: 
    [
        {
            title:'Eat out',
            budget: 50
        },
        {   
            title:'Rent',
            budget: 675
        },
        {
            title:'Grocery',
            budget: 110
        },
        {
            title:'Clothing',
            budget: 75
        },
        {
            title:'Loans',
            budget: 1000
        },
        {
            title:'Credit Card Bills',
            budget: 200
        },
        {
            title: 'Gas',
            budget: 300
        },
        {
            title:'Savings', 
            budget: 500
        },
    ]
};

app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log('API served at http://localhost:${port}');
});