const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    entry: {
        main: './src/client/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/index.html'
        }),
        new CleanWebpackPlugin({})
    ]
}