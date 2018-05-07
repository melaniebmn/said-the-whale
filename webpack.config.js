const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'docs')
  },
  devServer: {
    contentBase: './src',
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules:[
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          }
        )
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new ExtractTextPlugin({filename: 'main.css'}),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new UglifyJSPlugin()
  ]
};