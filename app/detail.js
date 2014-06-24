define(function (require) {
	var http = require('plugins/http'),
		ko = require('knockout');

	var url = 'http://esebsmw9004.eemea.ericsson.se/metricsweb/api/metricsapi/';

	return {
		activate: function (context) {
			var that = this;
			that.details = ko.observable();
			that.details.Modules = ko.observableArray([]);

	   		return http.get(url + context).then(function(response) {
	   			that.details.ID = response.ID;
	   			that.details.Name = response.Name;
	   			that.details.TimeStamp = response.TimeStamp;

	   			that.details.Modules(response.Modules);
    	  	})
	   	}
	};
});