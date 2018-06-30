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
//1.collect userdata from request object
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
router.get()

module.exports = router;