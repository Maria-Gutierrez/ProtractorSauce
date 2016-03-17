
/**
* Page object file
*/

(function (){

  'use strict';

  var register = function () {
  };

  register.prototype = Object.create({}, {

    FillForgetForm: {
      value: function(firstname, lastname, email, password, confirmpassword) {
        this.txtFirstname.clear();
        this.txtFirstname.sendKeys(firstname);
        this.txtFirstname.sendKeys(protractor.Key.TAB);
        this.txtLastname.clear();
        this.txtLastname.sendKeys(lastname);
        this.txtLastname.sendKeys(protractor.Key.TAB);
        this.txtEmail.clear();
        this.txtEmail.sendKeys(email);
        this.txtEmail.sendKeys(protractor.Key.TAB);
        this.txtPassword.clear();
        this.txtPassword.sendKeys(password);
        this.txtPassword.sendKeys(protractor.Key.TAB);
        this.txtConfirmPswd.clear();
        this.txtConfirmPswd.sendKeys(confirmpassword);
        this.txtConfirmPswd.sendKeys(protractor.Key.TAB);
      }
    },

    CreateRandomAccountStandAlone: {
      value: function() {
        this.btnMenuCreateAnAccount.click();
        browser.sleep(2000);
        this.FillForgetForm('sample', 'sample', 'user'+ Math.floor((Math.random() * 10000))+'@sainsburysebooks.com','Sample1234','Sample1234');
        this.chkAgreeTerms.click();
        this.btnCreateAccount.click();
      }
    },


    txtFirstname: {
      get: function() {
        return element(by.css('[ng-model="regData.first_name"]'));
      }
    },

    txtLastname: {
      get: function() {
        return element(by.css('[ng-model="regData.last_name"]'));
      }
    },

    txtEmail: {
      get: function() {
        return element(by.css('[ng-model="regData.email_address"]'));
      }
    },

    txtPassword: {
      get: function() {
        return element(by.css('[ng-model="regData.password"]'));
      }
    },


    txtConfirmPswd: {
      get: function() {
        return element(by.css('[ng-model="regData.confirm_password"]'));
      }
    },


    chkAgreeTerms: {
      get: function() {
        return element(by.css('[ng-model="regData.agree_terms"]'));
      }
    },


    btnCreateAccount: {
      get: function() {
        return element(by.css('[ng-click="create()"]'));
      }
    },

    btnMenuCreateAnAccount: {
      get: function() {
        return element(by.linkText('Create an account'));
      }
    },


  });

  module.exports = register;

})();
