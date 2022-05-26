const withTM = require('next-transpile-modules')(['tublet-ui']);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
});
