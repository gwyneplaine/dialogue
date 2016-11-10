const express = require('express');
const app = express();
const webpack = require('webpack');
const config = require('../webpack.config.js');
const path = require('path');

var compiler = webpack(config);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../public/index.html'))
});

app.listen(3000, function () {
  console.log('AWWWW SHIET');
})
