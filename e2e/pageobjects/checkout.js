
/**
* Page object file
*/
(function (){

  'use strict';

  var checkout = function () {
  };

  checkout.prototype = Object.create({}, {



    FillCheckoutForm : {
      value: function(creditCard,cardName,expiryMonth,expiryYear,securityCode) {
        this.txtCreditcard.clear();
        this.txtCreditcard.sendKeys(creditCard);
        this.txtCardname.clear();
        this.txtCardname.sendKeys(cardName);
        this.txtExpiryMonth.clear();
        this.txtExpiryMonth.sendKeys(expiryMonth);
        this.txtExpiryYear.clear();
        this.txtExpiryYear.sendKeys(expiryYear);
        this.txtSecurityCode.clear();
        this.txtSecurityCode.sendKeys(securityCode);
        this.txtSecurityCode.sendKeys(protractor.Key.TAB);
      }
    },

    txtCreditcard: {
      get: function() {
        return element(by.model('checkout.card_number'));
      }
    },

    txtCardname: {
      get: function() {
        return element(by.id('adyen-encrypted-form-holder-name'));
      }
    },

    txtExpiryMonth: {
      get: function() {
        return element(by.id('adyen-encrypted-form-expiry-month'));
      }
    },

    txtExpiryYear: {
      get: function() {
        return element(by.id('adyen-encrypted-form-expiry-year'));
      }
    },

    txtSecurityCode: {
      get: function() {
        return element(by.id('adyen-encrypted-form-cvc'));
      }
    }

  });

  module.exports = checkout;

})();
