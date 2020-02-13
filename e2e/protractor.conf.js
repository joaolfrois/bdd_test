exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',

  specs: ['**/*/*.e2e-spec.ts'],

  capabilities: {
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: '10.0',
    deviceName: 'Android Emulator'

  },

  baseUrl: 'http://10.0.2.2:8000'
};