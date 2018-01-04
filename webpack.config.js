const webpack = require('webpack');
const path = require('path');
const UglifyJS = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
var HtmlWebpackPlugin = require('html-webpack-plugin');
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

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
        use: [
          {
            loader: 'responsive-loader',
          },
          { loader: "url-loader",
            options: {
              limit: 25000,
              name: 'images/[hash]-[name].[ext]'
            },
          },
          {  loader: 'image-webpack-loader' },
        ]
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
              sourceMap: false,
            },
          },
          { loader: 'css-loader' },
          { loader: 'autoprefixer-loader' },
          { loader: 'sass-loader' },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new GoogleFontsPlugin({
      fonts: [
        { family: 'Catamaran' },
        { family: 'Philosopher' },
      ],
      local: false,
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  devtool: 'eval-source-map',
};

if (process.env.NODE_ENV === 'production') {
  const paths = [{
    loc: '/',
    priority: '1.0',
    lastmod: '2018-01-03',
    changeFreq: 'weekly'
  }];

  module.exports.module.rules[2] = {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['css-loader', 'autoprefixer-loader', 'sass-loader']
    })
  };
  module.exports.plugins.push(
    new ExtractTextPlugin('style.css'),
    new UglifyJS(),
    new OptimizeCSSAssets()
  );
}