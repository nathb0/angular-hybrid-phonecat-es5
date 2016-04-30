(function(app) {
	PhoneListCtrl = function(Phone) {
		var vm = this;
		Phone.query()
		    	    	.subscribe(
	    	    	function(phones) {
						this.phones = phones;
						this.phones.forEach(function(entity) {console.log(entity);});
	    	    	}.bind(this)
	    	    );
		vm.orderProp = 'age';
	}

	PhoneListCtrl.$inject = ['phones'];	
	app.PhoneListCtrl = PhoneListCtrl;

	app.phonelist	= angular.module('phonecat.list')
				.controller('PhoneListCtrl', app.PhoneListCtrl);

})(window.app || (window.app = {}));

/*
'use strict';

angular.module('phonecat.list')
  .controller('PhoneListCtrl', PhoneListCtrl);

PhoneListCtrl.$inject = ['Phone'];

function PhoneListCtrl(Phone) {
  var vm = this;
  vm.phones = Phone.query();
  vm.orderProp = 'age';
}

*/