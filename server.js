const express = require('express');
const request = require('request');

const app = express()
const port = 3001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {
  const {
    query: {
      url,
    },
  } = req;

  const options = {
    method: 'GET',
    url: url,
    headers: {
      'cache-control': 'no-cache',
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
