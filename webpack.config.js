const path = require('path');
var webpack = require('webpack');
const options_ujp = {
		    // 最紧凑的输出
		    beautify: false,
		    // 删除所有的注释
		    comments: false,
		    compress: {
		      // 在UglifyJs删除没有用到的代码时不输出警告  
		      warnings: false,
		      // 删除所有的 `console` 语句
		      // 还可以兼容ie浏览器
		      drop_console: true,
		      // 内嵌定义了但是只用到一次的变量
		      collapse_vars: true,
		      // 提取出出现多次但是没有定义成变量去引用的静态值
		      reduce_vars: true,
		    }
  		}
module.exports = {
	entry:{
		app: './app.js',
		home: './js/home.js',
		page: './js/page.js',
		cart: './js/cart.js'
	},
	output:{
		path: path.resolve(__dirname,'dist/js'),
		filename: '[name].js'
		// auxiliaryComment: "Test Comment",
		// libraryTarget: 'amd',
		// publicPath:'/js/'
	},
	module: {
    rules: [
		         {
			          test: /\.js$/,
			          exclude: /(node_modules|bower_components)/,
			          use: {
		              loader: 'babel-loader',
		              query: {
		                presets: ["es2015"]
		              }
			          }
		        }
    			]
  },
  plugins: [
	  // new webpack.optimize.CommonsChunkPlugin({
	  //   name: ['app', 'home','page','cart'],
	  //   filename: 'common.min.js',
	  // }),  
	  new webpack.optimize.UglifyJsPlugin({//压缩js
	      compress: {
	        warnings: false
	      },
	      sourceMap: true,
	      mangle: false
	    }) 	
  ]
};