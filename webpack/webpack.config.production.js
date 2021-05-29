// webpack.config.js
module.exports = [
  {
    mode: "development",
    entry: "./src/electron.ts",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: projectRoot + "/dist/",
      filename: "bundle.js",
      publicPath: publicPath,
      contentBase: projectRoot + "/public/",
    },
  },
];
