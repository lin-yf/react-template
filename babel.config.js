const developmentEnvironments = ['development', 'test'];

module.exports = (api) => {
  // See docs about api at https://babeljs.io/docs/en/config-files#apicache

  const development = api.env(developmentEnvironments);

  return {
    presets: [
      // @babel/preset-env will automatically target our browserslist targets
      [
        '@babel/preset-env',
        {
          targets: 'last 2 versions, not dead',
        },
      ],
      ['@babel/preset-react', { development }],
    ],
    plugins: [['import', { libraryName: 'antd-mobile', style: 'css' }]],
  };
};
