// webpack.config.js
//var path = require('path')

module.exports = {
  entry: ['./helloworld'], // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader']
    }]
  }
}