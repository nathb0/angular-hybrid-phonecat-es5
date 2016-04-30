(function(app) {
	upgradeAdapter = app.UpgradeAdapter;
	upgradeAdapter.addProvider(app.Phones);
	
	app.main = angular.module('phonecat.core', ['ngResource'])
		.filter('checkmark', app.CheckmarkFilter)
		//.factory('Phone', app.Phone);
		.factory('phones', upgradeAdapter.downgradeNg2Provider(app.Phones));
})(window.app || (window.app = {}));


/*  
'use strict';

angular.module('phonecat.core', [
  'ngResource'
]);
*/