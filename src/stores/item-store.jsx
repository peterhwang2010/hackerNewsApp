var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getNewStory: function(){
		Api.get('newstories')
			.then(function(json){
				this.storyId = json
				this.triggerChange();
			}.bind(this)); 
	},
	triggerChange: function(){
		this.trigger('change', this.storyId);
	}	
});