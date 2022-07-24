const express = require('express');
const mongoose = require('mongoose');
const app = express();

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});

app.get('/posts', (req,res) => {
    res.send('We are on posts.');
});

//Connect to db
mongoose.connect(
    'mongodb+srv://tamrakar:IfHII6hY4gDFOYvb@cluster0.qlizhbn.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    () => { console.log('connected to DB!');}
)

//How do we start listening to the server
app.listen(3000);