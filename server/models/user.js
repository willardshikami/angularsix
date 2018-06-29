const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String
});

module.exports = moongose.model('user', userSchema, 'users');