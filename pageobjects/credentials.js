/**
 * Page object file
 */


(function (){

  'use strict';

  var credentials = function () {
  };

  credentials.prototype = Object.create({}, {

    username: {
      get: function () {

        //return 'qa@sainsburysentertainment.co.uk';
        //return 'test101@sainsburysentertainment.co.uk';
        return 'Auto1@sainsburysentertainment.co.uk';
      }
    },

    invalidUsername: {
      get: function () {
        return 'FAILse.com';
      }
    },

    incorrectUsername: {
      get: function () {
        return 'FAIL@se.com';
      }
    },

    invalidUsernameFormat: {
      get: function () {
        return 'FAILsecom';
      }
    },

    password: {
      get: function () {
        return 'Test1234x';
      }
    },

    invalidPassword: {
      get: function () {
        return 'FAIL1234';
      }
    },

    ccNumber: {
      get: function () {
      //  return '5569510003330487';
        return '5555444433331111';
      }
    },

    musccNumber: {
      get: function () {
      //  return '5569510003330487';
        return '5555555555554444	';
      }
    },

    ccName: {
      get: function () {
      //  return 'Peter Donlon';
      return 'QA user';
      }
    },

    ccExpiryMonth: {
      get: function () {
        //return '10';
        return '06';
      }
    },

    ccExpiryYear: {
      get: function () {
        return '2016';
      }
    },

    ccSecurityCode: {
      get: function () {
      //  return '403';
        return '737';
      }
    },

    colleagueNumber: {
      get: function () {
        return '6341760010102634';
      }
    }

  });

  module.exports = credentials;

})();
