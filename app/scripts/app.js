'use strict';

/**
 * @ngdoc overview
 * @name multivuApp
 * @description
 * # multivuApp
 *
 * Main module of the application.
 */
angular
  .module('multivuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .when('/login', {
        templateUrl: 'features/auth/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .when('/jobs', {
        templateUrl: 'features/jobs/jobs.html',
        controller: 'JobsController',
        controllerAs: 'jobs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
