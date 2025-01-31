module.exports = {
  root: true,
  extends: ['@react-native', 'prettier'],
  parser: '@babel/eslint-parser',     // Babel 파서 추가
  parserOptions: {
    requireConfigFile: false,          // Babel 설정 파일을 강제하지 않음
    babelOptions: {
      configFile: './babel.config.js', // 명시적으로 Babel 설정 경로 지정
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        useTabs: false,
      },
    ],
  },
};
