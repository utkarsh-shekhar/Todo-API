'use strict'

const Todo = require('../models/Todo.js')

var exports = module.exports = {}

exports.create = (data) => {
  if(!data.message) {
    console.log('incomplete data')
    return false
  }

  let todo = new Todo(data)
  return todo.save((err) => {
    if(err) {
      console.log(err);
      return err
    }
    return true
  })
}

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    Todo.find((err, todos) => {
      if(err) {
        console.log('Error in getAll', err)
        reject(err)
      }
      resolve(todos)
    })
  }
)}

exports.get = (id) => {
  return new Promise((resolve, reject) => {
    Todo.find({_id: id}, (err, todo) => {
      if(err) {
        console.log('Error in getting id:', id)
        reject(err)
      }
      resolve(todo)
    })
  })
}

exports.update = (id, data) => {
  console.log('data', data);
  return new Promise((resolve, reject) => {
    Todo.update({_id: id}, {$set: data}, (err, result) => {
      if(err) {
        console.log('Error in update', err)
        reject(err)
      }
      resolve(result)
    })
  })
}

exports.delete = (id) => {
  return new Promise((resolve, reject) => {
    Todo.remove({_id: id}, err => {
      if(err) {
        console.log('Error in deleting id:', id)
        reject(err)
      }
      resolve(true)
    })
  })
}
