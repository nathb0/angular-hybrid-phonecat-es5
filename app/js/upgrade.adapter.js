(function(app) {
	app.UpgradeAdapter = new ng.upgrade.UpgradeAdapter();
	//app.UpgradeAdapter.addProvider(app.Phones);
	app.UpgradeAdapter.addProvider(ng.http.HTTP_PROVIDERS);
})(window.app || (window.app = {}));

/*

(function(app) {
	app.CheckmarkFilter = function() {

	}
})(window.app || (window.app = {}));

*/