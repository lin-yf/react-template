// const { stylelint } = require('tf-lint-config-app');

module.exports = {
  // ...stylelint,
  extends: ['stylelint-prettier/recommended', 'stylelint-config-standard'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'unit-case': null,
    'no-descending-specificity': null,
    'block-no-empty': null,
    'no-empty-source': [true, { severity: 'warning' }],
    'declaration-colon-newline-after': null,
    'function-name-case': null,
    indentation: null,
    'no-invalid-double-slash-comments': null,
  },
};
