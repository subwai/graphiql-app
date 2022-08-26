// webpack.config.js
var path = require("path");
const projectRoot = path.join(__dirname, "..");

module.exports = [
  {
    mode: "development",
    entry: "./app/mainApp.jsx",
    target: "electron-main",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js(x?)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.js\.flow/,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      modules: [__dirname + "../app", "node_modules"],
      extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
      fallback: {
        crypto: require.resolve("crypto-browserify"),
      },
    },
    output: {
      path: path.join(projectRoot, "dist"),
      filename: "bundle.js",
      libraryTarget: "commonjs2",
      publicPath: "/dist/",
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      }
    },
  },
];
