module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    JSX: true,
    React: true,
    context: true,
    expect: true,
    google: true,
    jsdom: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'simple-import-sort',
    'sort-keys-fix',
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',

    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-props-no-spreading': 'off',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          ['^react'],
          ['^@?\\w'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^@estarozitnosti'],

          // Packages. `react` related packages come first.
          // Internal packages.
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'sort-keys': 'off',
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
