var path = require('path');
var config = {
	entry: './app/index.js',
	output: {
		filename: './dist/bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							module: true
						}
					}
				]
			}
		]
	}
}
module.exports = config;