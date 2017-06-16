'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb')

const routes = require('./routes')

const app = express()
const port = process.env.port || 3000
// Use body parser for POST requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Use Router
app.use('/', routes)
// Listen to request at localhost:port
app.listen(port)
console.log('http://localhost:' + port + '/');
