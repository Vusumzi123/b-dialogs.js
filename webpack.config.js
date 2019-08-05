const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const webpack_rules = [];
const webpackOption = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'b-dialog.min.js'
    },
/*     plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ], */
    module: {
        rules: webpack_rules
    },
    /* optimization: {
        minimize: false
      } */
}

let babelLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ["@babel/preset-env"]
        }
    }
}

webpack_rules.push(babelLoader);
module.exports = webpackOption;