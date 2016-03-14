
/**
* Page object file
*/

(function (){

  'use strict';

  var searchBox = function () {
  };


  searchBox.prototype = Object.create({}, {

    Search: {
      value: function(searchword) {
        this.txtSearchBox.sendKeys(searchword);
      }
    },

    PickBook: {
      value: function () {
        this.eleSearchProduct.get(Math.floor((Math.random() * 3))).click();
        this.btnBookBuy.get(0).click();
      }
    },

    eleSearchProduct: {
      get: function() {
        return element.all(by.css('.ebook-results .search-img'));
      }
    },

    btnBookBuy: {
      get: function() {
        return element.all(by.css('.buy-box .btn-corona'));
      }
    },

    txtSearchBox: {
      get: function() {
        return element(by.css('.search-widget-input [ng-model="search.query"]'));
      }
    }

  });

  module.exports = searchBox;


})();
