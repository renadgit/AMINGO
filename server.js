// Imports the express package into your file
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const UserRoutes = require('./routes/UserRoutes');
const FeedRoutes = require('./routes/FeedRoutes');
const PageRoutes = require('./routes/PageRoutes');
const CompanyRoutes = require('./routes/CompanyRoutes');

const initPassportStrategy = require('./config/passport')
// Create an express app
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());
initPassportStrategy(passport);

const db = 'mongodb+srv://dbadmin:alex@cluster0-a01wf.mongodb.net/test?retryWrites=true&w=majority';
mongoose
.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}) //Promise
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>{
    console.log('error', err)
})


app.use('/users',UserRoutes);
app.use('/feed',passport.authenticate('jwt',{session:false}),FeedRoutes);
app.use('/',PageRoutes);
app.use('/company',passport.authenticate('jwt',{session:false}),CompanyRoutes);
/*
    Our first route
    First argument: route address
    Second argument: callback
*/



app.listen(3000, ()=>{
    console.log('You are connected!')
})