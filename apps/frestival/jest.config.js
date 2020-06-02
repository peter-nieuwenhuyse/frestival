module.exports = {
  name: 'frestival',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/frestival',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
