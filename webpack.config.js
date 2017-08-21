const path = require('path');
// webpack = require("webpack");
module.exports = {
	entry:'./app.js',
	output:{
		path:path.resolve(__dirname,'dist/js'),
		filename:'bundle.js'
	},
	  module: {
    rules: []
  }
};