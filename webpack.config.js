const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  mode: "development",
  entry: {
    app: './src/index.js',
    firebase: './src/firebase.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    //  new HtmlWebpackPlugin({
    //     // template: './src/index.html',
    //  }),
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
