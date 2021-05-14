module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'style',
        'test',
        'chore',
      ],
    ],
    'header-max-length': [ 2, 'always', 75 ],
    'body-max-line-length': [ 0 ],
    'scope-case': [ 0 ],
  },
};
