define(['jquery','underscore','backbone','text!../../template/formTemplate.html', 'text!../../template/responseTemplate.html'
    ], function($, _, Backbone, formTemplate, responseTemplate){
    	
		var FormView = Backbone.View.extend({ 

	      el: '#content',

	      initialize: function(){
	        this.render(formTemplate);
	      },
	      
	      events: {
	      	"click .send": "sendInterface"
	      },
	      
	      sendInterface: function(){
	      	this.render(responseTemplate);
	      },

	      render: function(templ){
	      	var compiledTemplate = _.template(templ);
	        this.$el.html(compiledTemplate);
	      }    
	    });
	    
	    return FormView;
	});