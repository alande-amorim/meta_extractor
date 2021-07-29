const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/info', async (req, res)=> {
  const {url} = req.query;

  const response = await axios.get(url, {});
  res.send(response.data);
});

app.listen('9001', ()=>{
  console.log('Server listening on port 9001.')
});