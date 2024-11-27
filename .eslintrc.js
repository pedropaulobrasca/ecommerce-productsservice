module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'eol-last': ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'lf'
      }
    ]
  },
};
