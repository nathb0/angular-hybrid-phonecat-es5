(function(app) {
	app.CheckmarkFilter = function() {
		return function(input) {
			return input ? '\u2713' : '\u2718';
		};
	}
})(window.app || (window.app = {}));


/*

'use strict';

angular.module('phonecat.core')
  .filter('checkmark', checkmarkFilter);

function checkmarkFilter() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}
*/