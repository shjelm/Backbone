require.config({
	baseUrl:'js',
 	paths: {
    	jquery: 'libs/jquery/jquery.min',
    	underscore: 'libs/underscore/underscore',
    	backbone: 'libs/backbone/backbone.min'
 	},
		shim: {
      		'backbone': {
            	deps: ['underscore', 'jquery'],
            	exports: 'Backbone'
        },
        	'underscore': {
            	exports: '_'
        }
   }
});

require([

  // Load our app module and pass it to our definition function
    'app',
], function(App){
	
  // The "app" dependency is passed in as "App"
  App.initialize();
});