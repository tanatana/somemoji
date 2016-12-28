module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    filename: 'somemoji.js',
    path: __dirname + '/dist',
    libraryTarget: "umd",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel"
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  }
}
