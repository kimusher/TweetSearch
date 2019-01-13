const express = require('express');
const router = express.Router();

const Twit = require("twit");
let tweetsText = [];
let name;

const T = new Twit({
  consumer_key: 'p2wwGo0REbiQUfTeHC4QaW6ne',
  consumer_secret: '1ncYPAAu3r8xFu0jBH84zE7hM3ayFuR2YqDuczYAjoQDf62hAd',
  access_token: '1075820991429914624-EPMfWYm2eYTxyBLX3qk0jpWWlS9SgH',
  access_token_secret: 'DDl4bKS5LvB2tkoSgIqW2glfUCOssA0YbUnSUV8lRy1dy'
});

// processData : receive the data from the twitter api and convert it 
const processData = (err, data, response) => {
  if (err) {
    console.log("get tweets has failed!");
  }
  else {
    let tweets = data.statuses;
    tweetsText = [];
    for (let index = 0; index < tweets.length; index++) {
      console.log(tweets[index].text);
      tweetsText.push(tweets[index]);
    }
  
  }
}

// get the tweets from twitter using the twitter API and the Twit package 
router.get('/', (req, res) => { 
  console.log("the get req name is:" + name);
  tweetsText = [];
  T.get('search/tweets', { q: name, count: 20 }, processData);
  setTimeout(()=>{res.json(tweetsText).end()},1500);
})

// updates the name received from the search form
router.post('/', (req, res) => { 
  console.log("the post req name is:" + req.body.name);
  name = req.body.name;
  res.sendStatus(200);
})

module.exports = router;

