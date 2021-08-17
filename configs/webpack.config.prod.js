const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config.base.js');
const { appBuild, appPublic } = require('./paths');

module.exports = merge(webpackConfig, {
  mode: 'production',
  devtool: false,
  output: {
    path: appBuild,
    filename: 'js/[name].[contenthash:8].js', // 导出的文件名
    chunkFilename: 'js/[name].[contenthash:8].js', // 异步加载模块打包的文件名
    publicPath: './',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    }),
  ],
  optimization: {
    minimizer: [
      // 压缩js
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          sourceMap: {},
          mangle: {
            safari10: true,
          },
          keep_classnames: false,
          keep_fnames: true,
        },
      }),

      // 压缩css
      new CssMinimizerPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: '**/*',
            context: appPublic,
            globOptions: {
              dot: true,
              gitignore: true,
              ignore: ['**/index.*', '**/ignored-directory/**'],
            },
          },
        ],
      }),
    ],
  },
  // 警告 webpack 的性能提示
  performance: {
    hints: 'warning',
    // 入口起点的最大体积
    maxEntrypointSize: 50000000,
    // 生成文件的最大体积
    maxAssetSize: 30000000,
    // 只给出 js 文件的性能提示
    assetFilter(assetFilename) {
      return assetFilename.endsWith('.js');
    },
  },
});
