const config = require('./webpack.base.config');
// import config from './webpack.base.config';

const baseConfig = { ...config };
baseConfig.mode = 'development', // 这里可以选择模式，通常只有两种模式，development 和 production

module.exports = baseConfig;
  