module.exports = {
    entry: './src/index.ts',
    target: 'node',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        loaders: [
            { test: /.ts$/, loader: 'ts-loader', exclude: /node_modules/ }
        ]
    }
};