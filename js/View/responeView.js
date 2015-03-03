define(['jquery','underscore','backbone','text!../../template/responseTemplate.html'
    ], function($, _, Backbone, responseTemplate){
    	
		var ResponseView = Backbone.View.extend({ 

	      el: '#content',

	      initialize: function(){
	        this.render();
	      },

	      render: function(){
	      	var compiledTemplate = _.template(responseTemplate);
	        this.$el.html(compiledTemplate);
	      }    
	    });
	    
	    return FormView;
	});