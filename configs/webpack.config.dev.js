const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { spawn, execSync } = require('child_process');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const { resolveApp, appPackageJson } = require('./paths');
const proxy = require('../src/setProxy');

const baseConfig = require('./webpack.config.base');

const port = process.env.PORT || 1212;
const publicPath = `http://localhost:${port}/`;

module.exports = merge(baseConfig, {

  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    ...(process.env.PLAIN_HMR ? [] : ['react-hot-loader/patch']),
    `webpack-dev-server/client?http://localhost:${port}/`,
    'webpack/hot/only-dev-server',
    require.resolve('../src/index.js'),
  ],

  output: {
    path: resolveApp('dist'),
    publicPath: `/`,
    filename: 'bundle.dev.js',
  },
  module: {
    rules: [],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
    }),
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
  infrastructureLogging: {
    level: 'warn',
  },
  devServer: {
    port,
    publicPath,
    compress: true,
    inline: true,
    lazy: false,
    hot: true,
    quiet: false,
    overlay: {
      errors: true,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    contentBase: [resolveApp('public'), resolveApp('dist')],
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    before() {},
    proxy: proxy || {},
  },
});
