var path = require('path')
    webpack = require('webpack')
    ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
    entry: [
        'event-source-polyfill',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['','.js','.vue']
    },
    module: {
        loaders: [
            {
                test: /.vue$/,
                loader: 'vue'
            },
            {
                test: /.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    vue: {
    loaders: {
        css: ExtractTextPlugin.extract("css"),
        // you can also include <style lang="less"> or other langauges
        less: ExtractTextPlugin.extract("css!less")
      }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin("style.css")
    ]
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins = [
//     // new webpack.DefinePlugin({
//     //   'process.env': {
//     //     NODE_ENV: '"production"'
//     //   }
//     // }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         // warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ]
// } else {
//   module.exports.devtool = '#source-map'
// }
