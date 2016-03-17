/**
* Protractor e2e test spec
* Started e2e file test
*/

//variables
var Basket = require('../pageobjects/basket.js');
var Register = require('../pageobjects/register.js');
var SearchBox = require('../pageobjects/searchBox.js');
var Credentials = require('../pageobjects/credentials.js');
var Checkout = require('../pageobjects/checkout.js');

var basket = new Basket();
var register = new Register();
var searchBox = new SearchBox();
var credentials = new Credentials();
var checkout = new Checkout();
//

function GoToEbooks(){
  browser.get('/ebooks');
  browser.waitForAngular();
}

function GoToLogin(){
  browser.get('/login');
  browser.waitForAngular();
  browser.driver.manage().window().setSize(1500, 1500);
}

beforeEach(function(){
  browser.manage().deleteAllCookies();
});


describe('Checkout from basket', function () {

  it('should not allow invalid payment info', function () {
    GoToLogin();
    register.CreateRandomAccountStandAlone();
    browser.waitForAngular();
    GoToEbooks();
    searchBox.Search('Test epub');
    searchBox.PickBook();
    basket.btnCheckOutWithCard.click();
    browser.sleep(1000);
    checkout.FillCheckoutForm(' ', '  ', '  ', '  ', '  ');

    expect(basket.lblCCBasketErrorMsg.isDisplayed()).toBe(true);
    expect(basket.lblNameBasketErrorMsg.isDisplayed()).toBe(true);
    expect(basket.lblMonthBasketErrorMsg.isDisplayed()).toBe(true);
    expect(basket.lblYearBasketErrorMsg.isDisplayed()).toBe(true);
    expect(basket.lblCVCBasketErrorMsg.isDisplayed()).toBe(true);
  });

  // it('should allow user to make a purchase', function () {
  //   GoToLogin();
  //   register.CreateRandomAccountStandAlone();
  //   browser.waitForAngular();
  //   GoToEbooks();
  //   searchBox.Search('Test epub');
  //   searchBox.PickBook();
  //
  //   basket.btnCheckOutWithCard.click();
  //   browser.sleep(1000);
  //   checkout.FillCheckoutForm(
  //     credentials.ccNumber,
  //     credentials.ccName,
  //     credentials.ccExpiryMonth,
  //     credentials.ccExpiryYear,
  //     credentials.ccSecurityCode
  //   );
  //   basket.chkTermsDigitalProduct.click();
  //   basket.btnCompletePurchase.click();
  //   browser.waitForAngular();
  //   expect(browser.getTitle()).toContain('Confirmation');
  // });
});
