var React = require('react');
var Reflux = require('reflux');
var Header = require('./header');
var NewStory = require('./new-story');
var StoryStore = require('../stores/story-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(StoryStore, 'onChange')
	],
	render: function(){
		return <div>
			I am a new new new story
		</div>
	},



})