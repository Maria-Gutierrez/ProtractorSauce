/**
* Nodejs: e2e protractor config file
*/

exports.config = {

  //== Saucelabs config ==
  sauceUser: 'qase' ,
  sauceKey: 'Saucekey',
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
    'tunnel-identifier': process.env.TUNNEL_IDENTIFIER
  }
  ],

  baseUrl: 'http://uat-www.ents.io/',
  framework: 'jasmine2',

  //Options to be passed to Jasmine-node.

  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: true,
    showColors: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 500000,
    includeStackTrace: true
  }
};
