exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,

  specs: ['src/features/**/*.feature'],

  capabilities: {
    browserName: 'chrome',

  },

  cucumberOpts: {
    require: ['./src/steps/**/*.steps.ts'],
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};

