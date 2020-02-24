module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: { es6: true },
  extends: 'airbnb-base',
  rules: {
    semi: 'error',
    'max-len': ['error', 85],
    'new-cap': ['error', { newIsCap: true }],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: false,
        },
      },
    ],
    'space-before-function-paren': 'off',
  },
};
