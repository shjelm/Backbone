//Filename: boilerplate.js

define([
  // These are path alias that we configured in our bootstrap
  'libs/jquery/jquery.min',     
  'libs/underscore/underscore', 
  'libs/backbone/backbone.min'    
], function($, _, Backbone){
  // Above we have passed in jQuery, Underscore and Backbone
  // They will not be accessible in the global scope
  return {};
  // What we return here will be used by other modules
});