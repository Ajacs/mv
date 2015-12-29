'use strict';

/**
 * @ngdoc function
 * @name multivuApp.controller:LoginController
 * @description
 * # LoginCtrl
 * Controller of the multivuApp
 */

 function LoginController() {

   var vm = this;
   vm.name = 'LoginController';
   vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   vm.getName = function() {
     return vm.name;
   };
 }


angular.module('multivuApp')
  .controller('LoginController',  LoginController);
