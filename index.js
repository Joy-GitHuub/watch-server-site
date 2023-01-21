const express = require('express');
const app = express();
const port = 5000 || 8080 || 8000;
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const colors = require('colors');




const db = `mongodb+srv://watch-me-project:watch-me-project@cluster0.garvawt.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(`Watch-ME Database Connection is Successful`.green.bold);
});


// Middleware
/* 
*******************
    Middleware
*******************
*/
app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static("public"));

app.use(cors(), function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});



// Routers Require 
const userRouter = require('./Routers/User.Router');
const postRouter = require('./Routers/Post.Router');


// Routers App.use()
app.use('/api/watch-me/v1/user', userRouter);
app.use('/api/watch-me/v1/posts', postRouter);




app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Node JS Server Working is Perfect',
    });
});


app.listen(port, () => {
    console.log(`Watch Me Server Running Perfect on This Port ${port}`.red.bold);
});



module.exports = app;