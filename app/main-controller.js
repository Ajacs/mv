'use strict';

/**
 * @ngdoc function
 * @name multivuApp.controller:MainController
 * @description
 * # MainCtrl
 * Controller of the multivuApp
 */

 function MainController() {

   var vm = this;
   vm.name = 'MainController';
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
  .controller('MainController',  MainController);
