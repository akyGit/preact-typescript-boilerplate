const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackModules = require('webpack-modules'); // remove after alpha-3

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, (isProduction ? 'build' : 'public'))
    },

    devServer: {
        contentBase: path.join(__dirname, 'public')
    },

    devtool: isProduction ? '' : 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },

            {
                test: /\.less$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [ autoprefixer ]
                        }
                    },
                    'less-loader'
                ]
            },

            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            { test: /\.mjs$/, type: 'javascript/auto' }
        ]
    },

    plugins: [
        new WebpackModules(), // remove after alpha-3
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'templates', 'index.html')
        })
    ]
};

if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].css'
    }));

    config.plugins.push(new CleanWebpackPlugin());
}

module.exports = config;
