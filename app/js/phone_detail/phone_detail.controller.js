(function(app) {
	PhonecatDetailCtrl = function($routeParams, Phone) {
		var vm = this;
		Phone.get({phoneId: $routeParams.phoneId})
		    	    	.subscribe(
	    	    	function(phone) {
						this.phone = phone;
						this.mainImageUrl = phone.images[0];
	    	    	}.bind(this)
	    	    );
		
		vm.setImage = function(imageUrl) {
			vm.mainImageUrl = imageUrl;
		};
	}

	PhonecatDetailCtrl.$inject = ['$routeParams', 'phones'];
	app.PhonecatDetailCtrl = PhonecatDetailCtrl;

	app.phonedetail = angular.module('phonecat.detail')
				.controller('PhoneDetailCtrl', app.PhonecatDetailCtrl);

})(window.app || (window.app = {}));


/*
'use strict';

angular.module('phonecat.detail')
  .controller('PhoneDetailCtrl', PhonecatDetailCtrl);

PhonecatDetailCtrl.$inject = ['$routeParams', 'Phone'];

function PhonecatDetailCtrl($routeParams, Phone) {
  var vm = this;

  vm.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    vm.mainImageUrl = phone.images[0];
  });

  vm.setImage = function(imageUrl) {
    vm.mainImageUrl = imageUrl;
  };
}

*/