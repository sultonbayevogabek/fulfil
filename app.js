const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

fs.readdir(path.join(__dirname, 'routes'), (err, files) => {
   files.forEach(file => {
      const route = require(path.join(__dirname, 'routes', file))
      app.use(route.path, route.router)
   })
})

module.exports = app