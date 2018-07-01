const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

//DB String
const db = 'mongodb://shikami:shikami1@ds123946.mlab.com:23946/ng-auth';

//DB connection
mongoose.connect(db, err => {
  if(err){
    console.error('Error! ' + err)
  }else{
    console.log('Connected to Database!');
  }
});

//init API
router.get('/', (req, res) => {
  res.send('From the API');
});


//Request to register user
//1.collect/extract user information from request object
//2.convert it to model that mongoose understands... from ./
//3.save the user to the db
router.post('/register', (req, res) =>{
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if(error){
      console.log(error);
    }else{
      res.status(200).send(registeredUser);
    }
  })
})

//Request  to login user
//Collect Userdata from req body
//check if user exist in DB using findone function
//verify the user password with the one in the DB
//send status 200 if both information is true
router.post('/login', (req, res) => {
  let userData = req.body;

  User.findOne({email: userData.email}, (error, user) => {
    if(error){
      console.log(error);
    }else
      if(!user){
        res.status(401).send('Invalid email')
      }else
      if(user.password !== userData.password){
        res.status(401).send('Invalid password')
      }else
      res.status(200).send(user);
  })
})

module.exports = router;