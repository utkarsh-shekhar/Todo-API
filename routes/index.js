'use strict'

const express = require('express')
const mongodb = require('mongodb')

let routes = express.Router()
const ObjectID = mongodb.ObjectID
const controller = require('../controllers/todoController.js')
// Homepage
routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'This will be the homepage'
  })
})
// Create
routes.post('/create', (req, res) => {
  console.log(req.body)
  controller.create(req.body)
  res.status(201).json({ message: 'create' })
})
// Get all
routes.get('/get/all', (req, res) => {
  controller.getAll()
    .then(todos => res.status(200).json(todos))
    .catch(err => res.status(500).json(err))
})
// Get by id
routes.get('/get/:id', (req, res) => {
  console.log(req.params.id)
  let oid = new ObjectID(req.params.id)
  controller.get(oid)
    .then(todo => res.status(200).json(todo))
    .catch(err => res.status(500).json(err))
})
// Update
routes.put('/update/:id', (req, res) => {
  console.log(req.params.id)
  let oid = new ObjectID(req.params.id)
  controller.update(oid, req.body)
    .then(result => res.status(200).json({message: 'updated successfully.'}))
    .catch(err => res.status(500).json({message: 'Unsuccessful'}))
})
// Delete
routes.delete('/delete/:id', (req, res) => {
  console.log(req.params.id)
  let oid = new ObjectID(req.params.id)
  controller.delete(oid)
    .then(result => res.status(200).json({message: 'Deleted successfully'}))
    .catch(err => res.status(500).json({message: 'Unsuccessful deletion', err}))
})
// 404
routes.get('*', (req, res) => {
  res.status(404).json({message: 'No such api node exists'})
})


module.exports = routes
