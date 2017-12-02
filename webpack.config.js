const webpack = require('webpack');
const path = require('path');
const UglifyJS = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          { loader: 'babel-loader' }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader', options: {
              sourceMap: true,
            },
          },
          { loader: 'css-loader' },
          { loader: 'autoprefixer-loader' },
          { loader: 'sass-loader' },
        ]
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  devtool: 'eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins.push(
    new UglifyJS(),
    new OptimizeCSSAssets()
  );
}