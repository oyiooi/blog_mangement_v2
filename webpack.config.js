/* global module */
/* global require */
const HtmlWebpackPlugin= require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		filename: 'index.js',
		path: '/build/'
	},
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		historyApiFallback: {
			rewrites: [ 
				{ from: /./, to: '/index.html' }
			]
		},
		contentBase: './build',
		open: true,
		hot: true,
		port: 7777,
		progress: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},{
				test: /\.(sass|css)$/,
				loader: [
					'style-loader', // 创建style标签，并将css添加进去
					'css-loader', // 编译css
					'postcss-loader', // 前缀
					'sass-loader' // 编译sass
				]
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './template.html',
			chunks:['index'],
			hash:true
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}