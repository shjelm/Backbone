define(['jquery','underscore','backbone','text!../../template/formTemplate.html'
    ], function($, _, Backbone, formTemplate){
    	
		var FormView = Backbone.View.extend({ 

	      el: '#content',

	      initialize: function(){
	        this.render();
	      },

	      render: function(){
	      	var compiledTemplate = _.template(formTemplate);
	        this.$el.html(compiledTemplate);
	      }    
	    });
	    
	    return FormView;
	});