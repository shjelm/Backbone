define(['jquery','underscore','backbone','../js/View/mainView'
], function($, _, Backbone, MainView){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    app_router.on('route:defaultAction', function(actions){
      var mainView = new MainView();
      mainView.initialize();
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});