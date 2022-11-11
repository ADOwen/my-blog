const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1> Welcome to my Page </h1>')
})

app.listen(PORT, () =>{
  console.log(`API server running on port ${PORT}!`);
})