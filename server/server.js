const express = require('express');

const app = express()
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = require('./config/connection');

app.get('/', (req, res) => {
  res.send('<h1> Welcome to my Page </h1>')
})


db.once('open', () =>{
  app.listen(PORT, () =>{
    console.log(`API server running on port ${PORT}!`);
  })
})



