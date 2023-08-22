const config = require("./webpack.config.js");
const path = require("path");

module.exports = {
  ...config,
  mode: "production",
  devtool: false
};
