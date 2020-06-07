const express = require('express');
const app = express();
const cors = require('cors')
const directory = require('./directory');

app.use(cors());

app.get('/', function (req, res) {
  return res.send(directory.tree);
});

app.listen(process.env.PORT || 8080);