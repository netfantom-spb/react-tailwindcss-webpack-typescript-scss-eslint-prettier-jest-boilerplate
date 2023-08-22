const config = require("./webpack.config.js");
const path = require("path");

module.exports = {
  ...config,
  mode: "development",
  devServer: {
    open: true,
    static: {
      directory: path.resolve(__dirname, "./build")
    },
    hot: true,
    compress: true,
    historyApiFallback: true
  }
};
