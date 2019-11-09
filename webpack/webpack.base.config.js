const path = require('path'); //这个是node，内置的模块

function pathFromRoot(relativePath) {
    return path.join(__dirname, '..', relativePath);
  }

const config = {
    // mode: 'development', // 这里可以选择模式，通常只有两种模式，development 和 production
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(pathFromRoot('dist')), //这里一定要配置绝对路径
    },
    module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                  presets: [
                    '@babel/preset-env'
                  ],
                  plugins: [
                      '@babel/plugin-proposal-object-rest-spread',
                      ["@babel/plugin-proposal-decorators", { "legacy": true }],
                      ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                  ],
              }
            }
          }
    ]
    }
  };

module.exports = config;
// export default config;