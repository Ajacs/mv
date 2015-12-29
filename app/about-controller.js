'use strict';

/**
 * @ngdoc function
 * @name multivuApp.controller:AboutController
 * @description
 * # AboutCtrl
 * Controller of the multivuApp
 */

 function AboutController() {

   var vm = this;
   vm.name = 'AboutController';
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
  .controller('AboutController',  AboutController);
