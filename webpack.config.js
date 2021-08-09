/* eslint-disable linebreak-style */

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// eslint-disable-next-line linebreak-style
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
    ],
  },
  // eslint-disable-next-line linebreak-style
  plugins: [
    // eslint-disable-next-line linebreak-style
    new HtmlWebPackPlugin({
      // eslint-disable-next-line linebreak-style
      template: './src/index.html',
      // eslint-disable-next-line linebreak-style
      filename: './index.html',
    // eslint-disable-next-line linebreak-style
    }),
    // eslint-disable-next-line linebreak-style
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
