var Fetch = require('whatwg-fetch');
var rootUrl = 'https://hacker-news.firebaseio.com/v0/';

module.exports = {
	get: function(url) {
		return fetch(rootUrl + url + '.json')
		.then(function(response){
			return response.json()
		})
	}
};