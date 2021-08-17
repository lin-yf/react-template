module.exports = {
  parser: '@babel/eslint-parser',
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y'],
  env: {
    commonjs: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  extends: [
    // require.resolve('tf-lint-config-app/lib/eslint'),
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier/react',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto', semi: true }],
    'no-unused-vars': ['warn'],
    quotes: ['warn', 'single', 'avoid-escape'], // 单引号
    'no-multiple-empty-lines': ['error', { max: 2 }], // 限制空行
    'no-extra-semi': ['warn'], // 禁止不必要的分号(不会限制要加分号，不需要分号的地方他会报错)
    semi: 2, // 行末分号，根据编码习惯选择添加，这里配置的不加分号
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 'error',
    'react/prop-types': ['warn'],
    'react/no-deprecated': ['warn'],
    'react/display-name': 'off',
    'no-empty': [0],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './configs/webpack.config.prod.js',
      },
    },
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
    },
  },
};
