//config-overrides.js
const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: "[name]__[local]___[hash:base64:5]",
      },
      sourceMap: true
    }
  }),
)