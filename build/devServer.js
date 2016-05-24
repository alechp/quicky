var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var colors = require('colors');

const port = 8080;
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log(colors.green(`Listening on :${port}`));
  // console.log(colors.green(`publicPath: ${config.output.publicPath} \n path: ${config.output.path}`));
});
