var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		return <nav className="navbar navbar-default header">
			<div className="container-fluid">
					<Link to={'/'} className="navbar-brand">HackerNews</Link>
					<ul className="nav navbar-nav navbar-right">
						<li><Link to={'new/'}>New</Link></li>
						<li><Link to={'comments/'}>Comments</Link></li>
						<li><Link to={'show/'}>Show</Link></li>
						<li><Link to={'ask/'}>Ask</Link></li>
						<li><Link to={'jobs/'}>Jobs</Link></li>
						<li><Link to={'submit/'}>Submit</Link></li>
					</ul>
			</div>
		</nav>
	}
});