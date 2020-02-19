exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: ['src/features/**/*.feature'],

  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '10.0',
    deviceName: 'Android Emulator'

  },
  

  baseUrl: 'http://10.0.2.2:8000',

  cucumberOpts: {
    require: ['./src/steps/**/*.steps.ts'],
  },

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework')
};

