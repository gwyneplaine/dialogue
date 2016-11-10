var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './client/index.js',
  ],
  output: {
    path: path.join(__dirname + '/public/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['transform-object-assign', 'transform-object-rest-spread'],
      },
    }]
  },
  plugins: [
    new webpack.DefinePlugin({}),
  ]
}
