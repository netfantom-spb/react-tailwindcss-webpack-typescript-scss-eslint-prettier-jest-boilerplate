const path = require("path"),
  webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./src/ts/index.tsx"],
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false
        }
      },

      {
        // Typescript loader
        test: /\.tsx?$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.s?css$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: "asset"
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "automatic" }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "src/html/index.html",
      inject: true,
      base: "/",
      publicPath: "/",
      favicon: "src/assets/icons/favicon.svg"
    })
  ],

  resolve: {
    extensions: [
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".css",
      ".scss",
      ".png",
      ".svg",
      ".jpg"
    ],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/ts/components"),
      "@pages": path.resolve(__dirname, "src/ts/pages"),
      "@utils": path.resolve(__dirname, "src/ts/utils"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@images": path.resolve(__dirname, "src/assets/images")
    }
    //alias: require('./webpack.aliases'),
  },
  stats: "errors-warnings",
  devtool: "cheap-module-source-map",
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  performance: {
    hints: false
  }
};
