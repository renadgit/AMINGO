
//require module imports a package into ur file
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User.js');
const Feed = require('./models/Feed.js');
//running the package u imported, this case it will turn the app into an express app(object)
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = 'mongodb+srv://dbadmin:alex@cluster0-a01wf.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(db,{useNewUrlParser: true, useUnifiedTopology: true}) //promise
.then(()=>{console.log("db is connected");})
.catch(err =>{console.log(err,"error")})
 //first argument is route
 //second argument is call back
 app.get('/', (req, res)=>{
     res.send("<h1>welcome home<h2>")
     
 });
 app.get('/about',(req,res)=>{res.send('<h1>welcome to about page<h1>')});
 app.get('/contact',(req,res)=>{
     res.send(
         `<h1>welcome to contact page</h1>
          <p>${req.query.section}</p>`
     )});

 app.get('/blog/:page',(req,res)=>{
     const page = req.params.page;
     res.send('<h1>welcome to profile page'+page+'<h1>')});

     app.post('/register',(req,res)=>{
        
        const formData = 
        {
           firstName : req.body.firstName,
           lastName : req.body.lastName,
           email : req.body.email,
           password : req.body.password,
    
        }

        const newUser = new User(formData);
        newUser.save().then((newUserData)=>{
            res.json(newUserData)
        }).catch((err)=>{console.log('error',err);})

       
        });

        app.post('/feed',(req,res)=>{
        
            const formData = 
            {
               userName : req.body.userName,
               comment : req.body.comment,
               tags : req.body.tag,
               image : req.body.image,
               likes : req.body.likes,
               shares : req.body.shares, 
               date : req.body.date,
        
            }
        
            const newUser = new Feed(formData);
            newUser.save().then((newUserData)=>{
                res.json(newUserData)
            }).catch((err)=>{console.log('error',err);})
        
           
            });
 
app.listen(3000, ()=>{console.log("you are connected!")})