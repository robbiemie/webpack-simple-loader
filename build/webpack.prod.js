const { resolve } = require('path')
module.exports = {
  mode: 'development',
  entry: {
    index: './index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: [
          './loader/uppercase-loader.js',
          './loader/reverse-loader.js'
        ]
      }
    ]
  }
}
