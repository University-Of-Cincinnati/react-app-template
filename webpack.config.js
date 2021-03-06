var webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.IgnorePlugin(/vertx/)
  ],
  cache: true,
  entry: './index',
  output: {
    filename: 'browser-bundle.js'
  },
  module: {
    loaders: [
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.js$/, loader: 'jsx-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  }
};
