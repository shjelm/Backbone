define([
	'../libs/jquery/jquery.min',
	'../libs/underscore/underscore',
    '../libs/backbone/backbone.min',
    'text!../../template/formTemplate.html'
    ], function($, _, Backbone, formTemplate){
    	
		var FormView = Backbone.View.extend({ 

	      el: '#content',

	      initialize: function(){
	        this.render();
	      },

	      render: function(){
	      	console.log(formTemplate);
	      	
	        this.$el.html(_.template(formTemplate));
	      }    
	    });
	    
	    return FormView;
	});