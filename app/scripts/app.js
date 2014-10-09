'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules.
// 'app' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'.
angular
  .module('app', [
  'ui.router', 
  'config'
])

.run(function() {

})

.config(function($stateProvider, $urlRouterProvider) {

  // This starter uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'scripts/home/tpl/home.index.tpl.html'
    })

    .state('search', {
      url: '/search',
      templateUrl: 'scripts/search/search.index.tpl.html',
      controller: 'SearchCtrl'
    })

    .state('scanner', {
      url: '/scanner',
      templateUrl: 'scripts/scanner/scanner.index.tpl.html',
      controller: 'ScannerCtrl',
      controllerAs: 'scanner'
    })

    .state('check', {
      url: '/check/:qrData',
      templateUrl: 'scripts/check/check.index.tpl.html',
      controller: 'CheckCtrl',
    });
    

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

});

