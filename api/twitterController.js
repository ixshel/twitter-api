'use strict';

var Twitter = require('twitter-node-client').Twitter;
var config = require('../config');

//Callback functions
var error = function (err, response, body) {
	if (err) {
		console.log("Error: " + JSON.stringify(err));
	}
};

var twitter_config = {
	"consumerKey": 'nqo3HpNeTwJsOQ9dxwTqHTEu0', // config.consumer_key,
	"consumerSecret": '82th6VzpjNrb2k2d7w3s0hmWrER9jkSDFbzdEWmtmKzsHRCxmC', //config.consumer_secret,
	"accessToken": '998012123933429760-irc1lyri9SwiZ6GFeLMBEavuUqs4imE', //config.access_token,
	"accessTokenSecret": '3siFuELdloiRb6NkqthkWQMcXQLb1WqVTbq6xYvk8WNnx', //config.access_token_secret,
	"callBackUrl": config.callback_url
}

var twitter = new Twitter(twitter_config);

module.exports = {

	getBySearch: (req, res) => {

		twitter.getSearch({
			'q': 'onixjs',
			count: '10'
		}, (err => {
			// case for Error message
			res.status(400).json(err)
		}), (success => {
			// case for success
			res.status(200).json(JSON.parse(success));
		}));
	},

	getTimeline: (req, res) => {

		twitter.getUserTimeline({
			screen_name: 'nodejs',
			count: '10'
		}, (err => {
			// case for Error message
			res.status(400).json(err)
		}), (success => {
			// case for success
			res.status(200).json(JSON.parse(success));
		}));
	}
};