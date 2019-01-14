const express = require('express');
const router = express.Router();

const Twit = require("twit");
let tweetsText = [];
let name;

// Twitter API Keys (if needed - ask for them from me) 
const CONSUMER_KEY = "enter your key";
const CONSUMER_SECRET = "enter your key";
const ACCESS_TOKEN = "enter your key";
const ACCESS_TOKEN_SECRET = "enter your key";

const T = new Twit({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET
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

