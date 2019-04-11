const path  = require('path');
const newHmtlPlugin  = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase:'./dist'
    },
    plugins:[
       new newHmtlPlugin({
           filename:'index.html',
           template:'./src/index.html'
       })
    ]

}