module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'nativewind/babel',
      {
        async: 'process(css).then(cb)',
      },
    ],
  ],
};
