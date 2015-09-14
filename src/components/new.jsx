var React = require('react');
var Reflux = require('reflux');
var Header = require('./header');
var NewStory = require('./new-story');
var ItemStore = require('../stores/item-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ItemStore, 'onChange')
	],
	getInitialState: function(){
		return {
			storyId: []
		}
	},
	componentWillMount: function(){
		Actions.getNewStory();
	},
	render: function(){
		return <div>
			<Header />
				<div className="list-group">
					{this.renderNewStories()}
				</div>
		</div>
	},
	renderNewStories: function(){
		return this.state.storyId.map(function(story){
			return <Link to={"new/" + story}className="list-group-item" key={story}>
				<h4>{story}</h4>
			</Link>
		});
	}, 
	onChange: function(event, itemsId){
		this.setState({storyId: itemsId})
	}
});