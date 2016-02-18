var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var TARGET = process.env.npm_lifecycle_event;

var PATHS = {
    modules: path.join(__dirname, 'modules'),
    tests: path.join(__dirname, 'tests')
};

process.env.BABEL_ENV = TARGET;

var common = {

    // Entry accepts a path or an object of entries.

    entry: PATHS.modules,

    output: {
        path: PATHS.tests,
        filename: 'tests.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                // Enable caching for improved performance during development
                // It uses default OS directory by default. If you need something
                // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
                loader: 'babel?cacheDirectory',
                include: PATHS.modules
            },{
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'autoprefixer-loader?browsers=last 3 versions', 'sass-loader'],
                // Include accepts either a path or an array of paths.
                include: PATHS.modules
            }
        ]
    },

    sassLoader: {
        outputStyle: 'compressed',
        precision: 4
    }

};

// Default configuration

if (TARGET === 'dev' || !TARGET) {
    module.exports = merge(common, {
        devServer: {
            contentBase: PATHS.tests,

            // Enable history API fallback so HTML5 History API based
            // routing works. This is a good default that will come
            // in handy in more complicated setups.

            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // Display only errors to reduce the amount of output.
            stats: 'errors-only',

            // Parse host and port from env so this is easy to customize.
            host: process.env.HOST,
            port: process.env.PORT

        },
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),

            // When Webpack builds your JavaScript, it will load these modules
            // whenever their identifiers are declared in your code.
            // Example: Now you can use React without having to import ‘react’
            // explicitly at the top of your component file.

            new webpack.ProvidePlugin({
                'React': 'react',
                'ReactDOM': 'react-dom'
            })
        ]
    });
}
