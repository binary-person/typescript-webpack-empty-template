const path = require('path');

module.exports = {
    entry: './src/client.ts',
    mode: 'development',
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader'
        }]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'webpack.min.js',
        path: path.resolve(__dirname, 'lib/public')
    },
    watchOptions: {
        ignored: /node_modules/
    }
};