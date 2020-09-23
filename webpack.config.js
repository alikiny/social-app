const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.join(__dirname, "public", "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    },

                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    },
                ]
            },
        ]
    },

    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        publicPath: '/dist/',
    },
}