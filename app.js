const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');


//middlewares
app.use(cors());
app.use(bodyParser.json());

//import toutes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute); //middleware

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});


//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => { console.log('connected to DB!');}
)

//How do we start listening to the server
app.listen(3000);