// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development", // or 'production' or 'none'
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: {
    react: "commonjs react",
    "react-dom": "commonjs react-dom",
  },
};
