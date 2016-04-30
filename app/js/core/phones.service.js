(function(app) {
	app.Phones =
	    ng.core.Class({
	    	constructor: [ng.http.Http, function(_http) { 
				this.httpUrl = 'phones/phones.json';
	    		this._http = _http;
	    	}],
	    	query: function() {
	    	      return this._http.get(this.httpUrl)
	    	      .map(function(res) {
	    	    	  return res.json(); 
	    	    })
	    	},
			get: function(id){
				phoneHttpUrl = 'phones/' + id.phoneId + '.json';
				return this._http.get(phoneHttpUrl)
					.map(function(res) {
							return res.json(); 
						}
					)
			}
	    });
})(window.app || (window.app = {}));

