const express = require('express')
const app = express()

app.get('/', (req, res) => {
   return res.json([
      {user: 'Paul'},
      {user: 'Lary'}
   ])
})

app.listen('5555', () => {
   console.log('listening on port 5555')
})