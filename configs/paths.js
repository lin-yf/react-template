const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  resolveApp,
  appRoot: resolveApp('.'),
  appSrc: resolveApp('src'),
  appBuild: resolveApp('dist'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),

  // 自定义别名
  appAlias: {
    '@': resolveApp('src'),
    'react-dom': '@hot-loader/react-dom',
  },
};
