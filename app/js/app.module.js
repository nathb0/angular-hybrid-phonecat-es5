'use strict';

angular.module('phonecatApp', [
    'ngRoute',
    'phonecat.core',
    'phonecat.detail',
    'phonecat.list'
  ]).config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/phones', {
          templateUrl: 'js/phone_list/phone_list.html',
          controller: 'PhoneListCtrl',
          controllerAs: 'vm'
        }).
        when('/phones/:phoneId', {
          templateUrl: 'js/phone_detail/phone_detail.html',
          controller: 'PhoneDetailCtrl',
          controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    }]);
	
angular.element(document).ready(function() {
      //angular.bootstrap(document.body, ['phonecatApp']);
      //angular.upgrade.UpgradeAdapter.bootstrap(document.body, ['phonecatApp']);
      //var upgradeAdapter = new ng.upgrade.UpgradeAdapter();
      app.UpgradeAdapter.bootstrap(document.body, ['phonecatApp']);
	  
	  /*
	  bootstrap method of UpgradeAdapter expects Angular 1 modules as dependencies, not Angular 2 providers.
	  */
 });

