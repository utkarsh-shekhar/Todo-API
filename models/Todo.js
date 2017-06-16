'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema({
  message: String,
  date_created: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  }
})

module.exports = mongoose.model('todos', Schema)
