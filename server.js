const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async (req, res) => {


   try{
      //Poderia usar response e depois pegar o data mas eu posso fazer assim direto
      const { data } = await axios('https://jsonplaceholder.typicode.com/users')
      return res.json(data)
   }catch(err){
      console.error(err)
   }
   

   
})

app.listen('5555', () => {
   console.log('listening on port 5555')
})