(function(app) {
	Phone = function($resource) {
	  return $resource('phones/:phoneId.json', {}, {
		query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
	  });
	}

	Phone.$inject = ['$resource'];
	app.Phone = Phone;
	
})(window.app || (window.app = {}));

/*
'use strict';

angular.module('phonecat.core')
  .factory('Phone', Phone);

Phone.$inject = ['$resource'];

function Phone($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
}
*/