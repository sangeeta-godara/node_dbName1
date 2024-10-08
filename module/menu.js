// models/person.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: null,
  },
  taste: {
    type: String,
    required: true,
    // enum: ['sweet','sour','spicy'],
  },
  mobile: {
    type: String,
  },
  is_drink: {
    type: Boolean,
    default: false,
  },
  ingredient: {
    type: String,
    default: 0,
    unique: true,
  },
});

const menu = mongoose.model('menu', menuSchema);

module.exports = menu;





