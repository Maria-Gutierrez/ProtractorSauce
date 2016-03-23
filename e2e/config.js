/**
* Nodejs: e2e protractor config file
*/

exports.config = {

  //== Saucelabs config ==
  sauceUser: 'username' ,
  sauceKey: 'APIkey',
  sauceSeleniumAddress:'ondemand.saucelabs.com:80/wd/hub',

  specs: [
   './test/checkoutSpec.js'
  ],

   multiCapabilities: [{
    'name': 'OS X 10.11, chrome, 46.0',
    'browserName': 'chrome',
    'platform': 'OS X 10.11',
    'version': '46.0',
    'maxInstances': '3',
    'shardTestFiles': 'true',
    //pass this if using on a Jenkins job
    'tunnel-identifier': process.env.TUNNEL_IDENTIFIER
  },
  {
    'name': 'Windows 8.1, firefox, 42.0',
    'browserName': 'firefox',
    'platform': 'Windows 8.1',
    'version': '42.0',
    'maxInstances': '3',
    'shardTestFiles': 'true',
    //pass this if using on a Jenkins job
    'tunnel-identifier': process.env.TUNNEL_IDENTIFIER
  },
  ],

  baseUrl: 'http://myUrl',
  framework: 'jasmine2',

  //Options to be passed to Jasmine-node.

  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: true,
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 500000,
    includeStackTrace: true
  }
};
