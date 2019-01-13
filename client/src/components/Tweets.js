import React from "react";
import Tweet from "./Tweet.js";

const Tweets = props => (
    <div className="col" >
        <div className="row" >
            {console.log(props.tweets)}
            {props.tweets.map((tweet) => {
                return (
                    <Tweet key={tweet.id_str} tweetData={tweet}></Tweet>

                );
            })}
        </div>
    </div>
);

export default Tweets;
