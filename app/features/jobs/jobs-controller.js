'use strict';

/**
 * @ngdoc function
 * @name multivuApp.controller:JobsController
 * @description
 * # JobsCtrl
 * Controller of the multivuApp
 */

 function JobsController() {

   var vm = this;
   vm.name = 'JobsController';
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
  .controller('JobsController',  JobsController);
