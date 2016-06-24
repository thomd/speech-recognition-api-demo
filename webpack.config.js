module.exports = {
   entry: [
      './app/index.js'
   ],
   module: {
      loaders: [
         {
            test: /.js$/,
            loader: 'babel-loader'
         }
      ]
   },
   output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
   },
   devtool: 'source-map'
}
