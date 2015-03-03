require.config({
	baseUrl:'js/libs',
 	paths: {
    	jquery: 'jquery/jquery.min',
    	underscore: 'underscore/underscore',
    	backbone: 'backbone/backbone.min',
    	app : '../app'
 	},
		shim: {
      		backbone: {
            	deps: ['underscore', 'jquery'],
            	exports: 'Backbone'
        },
        	underscore: {
            	exports: '_'
        }
   }
});

define(['app'], function(a){
	a.initialize();
});