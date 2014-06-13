define(function (require) {
	var http = require('plugins/http'),
		ko = require('knockout');

	var url = 'http://esebsmw9004.eemea.ericsson.se/metricsweb/api/metricsapi?latestonly=true';

	return {
		metricsData: ko.observableArray([]),
		activate: function () {
			var that = this;

	   		return http.get(url).then(function(response) {
    	  		that.metricsData(response);
       		});
    	}
	};
});