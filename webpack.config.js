var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH,"./");
var BUILD_PATH = path.resolve(ROOT_PATH,"build");

module.exports = {
    entry:{
        "app":path.resolve(APP_PATH,"src/index.jsx")
    },
    output:{
        path:BUILD_PATH,
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.js[x]?$/,
                exclude:/node_modules/,
                loader:'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test:/\.css?$/,
                loader : 'style-loader!css-loader!postcss-loader?modules'
            }
        ]
        
    },
    resolve:{
        modules:[__dirname,'node_modules'],
        alias:{},
        extensions:["*",".js",".jsx"]
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title:"react-book",
            template:"./src/template.html",
            inject:"body"
        }),
        new OpenBrowserPlugin({
            url:"http:/localhost:8900"
        })
    ]
}
