const path = require('path'); //这个是node，内置的模块

module.exports = {
    mode: 'development', // 这里可以选择模式，通常只有两种模式，development 和 production
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'), //这里一定要配置绝对路径
    },
  };
  