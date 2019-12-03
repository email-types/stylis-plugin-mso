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
  overrides: [
    {
      files: ['*.test.ts'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
      env: { jest: true },
    },
    {
      files: ['scripts/**/*'],
      rules: {
        'no-console': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: true,
            optionalDependencies: false,
          },
        ],
      },
    },
  ],
};
