'use strict';
const webpack = require("webpack");
const webpackConfig = {
    entry: {
        'app': './src/js/app.js',
        'test': './src/js/test.js'
    },
    output: {
        path: 'public/assets/js',
        publicPath: '/assets',
        filename: "[name].js",
        sourceMapFilename: 'maps/[name].map',
        jsonpFunction: 'fr'
    },
    module: {
        preLoaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'eslint'}
        ],
        loaders: [
            {test: /\.html$/, loader: 'html'},
            {test: /\.json$/, loader: 'json'},
        ],
        exprContextCritical: false
    },
    eslint: {
        configFile: '.eslintrc',
        failOnError: true
    }
};
module.exports = webpackConfig;