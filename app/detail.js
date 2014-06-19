define(function (require) {
	var http = require('plugins/http'),
		ko = require('knockout');

	var url = 'http://esebsmw9004.eemea.ericsson.se/metricsweb/api/metricsapi/'
	
	var Details = function(detailDTO) {
		this.ID = ko.observable(detailDTO.ID);
	}

	return {
		activate: function (context) {
			var that = this;

	   		return http.get(url + context).then(function(response) {
    	  		//that.metricsDetails = ko.observable(response);
    	  		that.metricsDetails = ko.observable(new Details(response));

    	  		//that.ID = ko.observable(response.ID);
   				
   				//that.click = function(){
				//	alert('Something was changed....');
				//}
       		});
    	}
	};
});