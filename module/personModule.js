// models/person.js
const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: null,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  work:{
    type:String,
    enum:['chef','waiter','manager']
  },
  mobile: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  aadharCardNumber: {
    type: String,
    required: true,
    unique: true,
  },
});

const person = mongoose.model('person', personSchema);

module.exports = person;





