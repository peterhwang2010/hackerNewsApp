var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/HashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var New = require('./components/new');
var Comments = require('./components/comments');
var Show = require('./components/show');
var Ask = require('./components/ask');
var Jobs = require('./components/jobs');
var Submit = require('./components/submit');

module.exports = (
	<Router history={new HashHistory}>
		<Route path='/' component={Main}>
			<Route path='new/' component={New} />
			<Route path='comments/' component={Comments} />
			<Route path='show/' component={Show} />
			<Route path='ask/' component={Ask} />
			<Route path='jobs/' component={Jobs} />
			<Route path='submit/' component={Submit} />
		</Route>
	</Router> 
)