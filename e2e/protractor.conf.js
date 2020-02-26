exports.config = {
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumAddress: 'http://localhost:4723/wd/hub',

  // directConnect: true,

  specs: ['src/features/**/*.feature'],

  capabilities: {
    deviceName: 'Nexus 5X API 29',
    browserName: '',
    autoWebview: true,
    autoWebviewTimeout: 20000,
    udid: "emulator-5554",
    platformName: "Android",
    platformVersion: "10.0",
    appPackage: "com.example.bdd_test",
    appActivity: "MainActivity",
    ensureWebviewsHavePages: true
  },

  baseUrl: 'http://10.0.2.2:8000',

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

