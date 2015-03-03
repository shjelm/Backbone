define(function (require) {
 
    var $           = require('../libs/jquery/jquery.min'),
        _           = require('../libs/underscore/underscore.min'),
        Backbone    = require('../libs/backbone/backbone.min');
 
    return Backbone.View.extend({ 

      el: '#form',

      initialize: function(){
      	console.log('asdasd');
        this.render();
      },

      render: function(){
      	console.log('form');
		        this.$el.html('
		        <form>
				  <div class="form-group">
				    <label for="exampleInputEmail1">Email address</label>
				    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputPassword1">Password</label>
				    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
				  </div>
				  <div class="form-group">
				    <label for="exampleInputFile">File input</label>
				    <input type="file" id="exampleInputFile">
				    <p class="help-block">Example block-level help text here.</p>
				  </div>
				  <div class="checkbox">
				    <label>
				      <input type="checkbox"> Check me out
				    </label>
				  </div>
				  <button type="submit" class="btn btn-default">Submit</button>
				</form>'
				);
      }
 
    });
 
});