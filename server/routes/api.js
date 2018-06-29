const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')

const db = 'mongodb://shikami:shikami1@ds123946.mlab.com:23946/ng-auth';

mongoose.connect(db, err => {
  if(err){
    console.error('Error! ' + err)
  }else{
    console.log('Connected to Database!');
  }
})

router.get('/', (req, res) => {
  res.send('From the API');
});


module.exports = router;