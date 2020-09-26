'use strict';

module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: { node: true },
  parser: 'babel-eslint',
  parserOptions: { sourceType: 'script' },
  rules: {
    strict: [2, 'global'],
    indent: [2, 'tab'],
    'no-tabs': 0,
    'no-console': 0,
		'arrow-parens': [2, 'as-needed'],
		'linebreak-style': 0,
  },
  overrides: [
    {
      files: ['**/__tests__/**.test.js', 'tests/**/**.test.js'],
      env: { jest: true },
      plugins: ['jest'],
    },
  ],
};
