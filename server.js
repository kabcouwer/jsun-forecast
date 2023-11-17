const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port)