const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => ({
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      root: path.resolve(__dirname),
      src: path.resolve(__dirname, "src"),
      assets: path.resolve(__dirname, "src/assets"),
      components: path.resolve(__dirname, "src/components"),
      utils: path.resolve(__dirname, "src/utils"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/utils/html/template.html",
      inject: "body",
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [
          env.development ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require.resolve("sass"),
              sourceMap: env.development ? true : false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)/i,
        type: "asset/resource",
        generator: {
          filename: "static/assets/[hash][ext]",
        },
      },
      {
        test: /\.svg$/i,
        type: "asset/inline",
      },
    ],
  },
  devtool: env.development ? "inline-source-map" : false,
  devServer: {
    port: 9000,
    compress: true,
    static: ["static"],
  },
});
