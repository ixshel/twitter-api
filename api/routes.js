var express = require('express');
var router = express.Router();

//Controllers
var twitterController = require('./twitterController');

router.get('/user', twitterController.getUserInfo);
router.get('/tweets', twitterController.getTimeline);
router.get('/tweetsBySearch', twitterController.getBySearch);

module.exports = router;