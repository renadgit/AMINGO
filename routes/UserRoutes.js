
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const UserModel = require('../models/UserModel');

router.post('/register', (req, res)=>{

    const formData = {
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email : req.body.email,
        password : req.body.password
    }

    const newUser = new UserModel(formData);
     
    bcrypt.genSalt((err,salt)=>{
       bcrypt.hash(newUser.password,salt,(err,hashedPassword)=>{
            newUser.password = hashedPassword;
        })
    })
    
    newUser
    .save() // Promise

    // If promise is fulfilled
    .then((newUserData)=>{
        // Send response in the form of JSON
        res.json(newUserData)
    })

    // Otherwise...
    .catch((err)=>{
        console.log('error', err);
    })
});

module.exports = router;