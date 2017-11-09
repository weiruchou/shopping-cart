// webpack.config.js
//var path = require('path')

module.exports = {
  entry: ['./src/Container'], // 在 index 檔案後的 .js 副檔名是可選的
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 排除node_modules文件夹
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        use: [
          { loader: 'json-loader' }
        ]
      }
    ]
  },
}