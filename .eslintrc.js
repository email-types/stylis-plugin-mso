const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

module.exports = {
  extends: [
    '@postmates',
    'prettier',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
  env: { node: true },
  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: { extensions },
    },
  },
  rules: {
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.ts'],
        optionalDependencies: false,
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts'],
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        'jest/prefer-to-be-null': 2,
        'jest/prefer-to-be-undefined': 2,
        'jest/prefer-to-have-length': 2,
      },
    },
    {
      files: ['scripts/**/*'],
      rules: {
        'no-console': 0,
      },
    },
  ],
};
