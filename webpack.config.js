const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const passes = parseInt(process.env.PASSES, 10);

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: `bundle[${passes}].js`,
    path: path.resolve(__dirname, "dist"),
    clean: false,
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.ts$/,
        use: "babel-loader",
        exclude: /node_modules\/(?!@reduxjs\/toolkit)/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    modules: [path.resolve(__dirname), "node_modules"],
  },
  devtool: false,

  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        minify: TerserPlugin.swcMinify,
        terserOptions: { compress: { dead_code: true, passes } },
        extractComments: false,
      }),
    ],
    runtimeChunk: false,
  },
};
