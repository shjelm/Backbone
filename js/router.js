define([
  'libs/jquery/jquery.min',
  'libs/underscore/underscore',
  'libs/backbone/backbone.min',
  'View/mainView'
], function($, _, Backbone, MainView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      '/View': 'showView',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('showView', function(){
      // Call render on the module we loaded in via the dependency array
      
    });
    app_router.on('route:defaultAction', function(actions){
      // We have no matching route, lets just log what the URL was
      // console.log('No route:', actions);
      var mainView = new MainView();
      mainView.initialize();
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});