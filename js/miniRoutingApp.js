angular.module('miniRoutingApp', ['ui.router'])
//1) add a config property onto your app variable that takes in a anonymous function as it's only argument.
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'js/settings/settingsTmpl.html',
      controller: 'settingsCtrl'
    })
    .state('products', {
      url: '/products:id',
      templateUrl: 'js/products/productTmpl.html',
      controller: 'productsCtrl'
    });

    $urlRouterProvider
      .otherwise('/');
});
