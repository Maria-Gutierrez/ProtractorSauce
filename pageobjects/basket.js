
/**
* Page object file
*/
(function (){

  'use strict';

  var basket = function () {
  };

  basket.prototype = Object.create({}, {

    RemoveItem: {
      value: function () {
        this.lnkBasketTitle.click();
        this.lnkRemoveItem.click();
        this.btnContinueShopping.click();
      }
    },

    accessBasket: {
      value: function() {
        this.lnkBasket.click();
      }
    },

    continueShopping: {
      value: function() {
        this.btnContinueShopping.get(0).click();
      }
    },

    lnkBasket: {
      get: function() {
        return element(by.css('.icon-cart-link'));
      }
    },

    lnkBasketTitle: {
      get: function() {
        return element(by.css('.basket-title'));
      }
    },

    lnkCreateAccount: {
      get: function() {
        return element(by.linkText('Create account'));
      }
    },

    lnkRemoveItem: {
      get: function() {
        return element.all(by.css('[ng-click="remove()"]'));
      }
    },

    btnContinueShopping: {
      get: function() {
        return element.all(by.css('[ng-click="$hide()"]'));
      }
    },

    btnCloseBasket: {
      get: function() {
        return element(by.buttonText('Close'));
      }
    },

    btnWishlist: {
      get: function() {
        return element(by.css('.wishlist'));
      }
    },

    btnCheckOutWithCard: {
      get: function() {
        return element(by.linkText('Buy with card'));
      }
    },

    btnCompletePurchase: {
      get: function() {
        return element(by.buttonText('Complete Purchase'));
      }
    },

    lnkCheckout: {
      get: function() {
        return element(by.linkText('Checkout'));
      }
    },

    chkSaveCardDetails: {
      get: function() {
        return element(by.css('[ng-model="checkout.save_card"]'));
      }
    },

    chkTermsDigitalProduct: {
      get: function() {
        return element.all(by.css('[ng-model="terms_digital_product_purchase"]'));
      }
    },

    eleBasketItem: {
      get: function() {
        return element.all(by.css('.basket-item'));
      }
    },

    eleBasketContent: {
      get: function() {
        return element(by.css('.basket-content'));
      }
    },

    imgProductCover: {
      get: function() {
        return element(by.css('.basket-cover'));
      }
    },

    lblProductTitle: {
      get: function() {
        return element(by.css('.basket-item-content .title'));
      }
    },

    lblProductAuthor: {
      get: function() {
        return element(by.css('.basket-item-content .author'));
      }
    },

    lblEmptyBasket: {
      get: function() {
        return element(by.css('[ng-show="basketItems.length === 0 && showBasket"]'));
      }
    },

    lblProductPrice: {
      get: function() {
        return element(by.css('.basket-item-content .price'));
      }
    },

    lblProduct: {
      get: function() {
        return element(by.css('.basket-container'));
      }
    },

    lblProductItems: {
      get: function() {
        return element(by.css('.basket-total .items'));
      }
    },

    lblBasketPrice: {
      get: function() {
        return element(by.css('.basket-total .price'));
      }
    },

    lblBasketErrorMsg: {
      get: function() {
        return element.all(by.css('[ng-show="formError"]'));
      }
    },

    lblCCBasketErrorMsg: {
      get: function() {
        return element(by.css('.form-card-number .error-label'));
      }
    },

    lblNameBasketErrorMsg: {
      get: function() {
        return element(by.css('.form-card-name .error-label'));
      }
    },

    lblMonthBasketErrorMsg: {
      get: function() {
        return element(by.css('.form-card-expiry-month .error-label'));
      }
    },

    lblYearBasketErrorMsg: {
      get: function() {
        return element(by.css('.form-card-expiry-year .error-label'));
      }
    },

    lblCVCBasketErrorMsg: {
      get: function() {
        return element(by.css('.form-card-cvc .error-label'));
      }
    },

    ckBoxAutoRenew : {
      get: function () {
        return element(by.css('[ng-click="renewProduct($event, product.order_id)"]'));
      }
    },

  });

  module.exports = basket;

})();
