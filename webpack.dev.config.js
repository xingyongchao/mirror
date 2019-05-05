const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const commonConfig = require('./webpack.common.config.js');
// 定义的proxy 地址
const target = "https://mock.yonyoucloud.com/mock/388";

const devConfig = {
    devtool: 'inline-source-map',// devtool优化
    entry: {
        app: [
            'react-hot-loader/patch', // 模块热替换
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        /*这里本来应该是[chunkhash]的，但是由于[chunkhash]和react-hot-loader不兼容。只能妥协*/
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            include: [
                path.join(__dirname, './node_modules'),
            ],
            use: [
                "style-loader",
                {
                    loader: 'css-loader',
                    options: {
                        modules: false,
                        importLoaders: 1,
                        sourceMap: false
                    }
                },
            ]
        },{
            test: /\.css$/,
            include: path.join(__dirname, './src'),
            use: ["style-loader", "css-loader", "postcss-loader"]
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'HOST': '""',
            }
        })
    ],
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        proxy: {
            "/api": {
                target,
                pathRewrite: { "^/api": "" },
                changeOrigin: true
            }
        }
    }
};

module.exports = merge({
    customizeArray(a, b, key) {
        /*entry.app不合并，全替换*/
        if (key === 'entry.app') {
            return b;
        }
        return undefined;
    }
})(commonConfig, devConfig);