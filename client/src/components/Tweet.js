import React from "react";

// single tweet component 
const Tweet = props => (
    <div className="col-md-12 container" style={{ marginBottom: "2rem" }}>
        <div className="tweet_box row">
            <span className="col-sm-2 col-md-2 tweet_box-span-img">
                <img src={props.tweetData.user.profile_image_url.replace('_normal', '')} alt="profile img" className="tweet_box-img " /> 
            </span>
            <div className="tweet_box__text col-sm-8 col-md-8" >
                <div className="tweet_box__title_box">
                    <h5 className="tweet_box__title tweet_box__title_name">{props.tweetData.user.name}</h5>
                    <h5 className="tweet_box__title tweet_box__screen_name">@{props.tweetData.user.screen_name}</h5>
                    <h5 className="tweet_box__title tweet_box__date">{props.tweetData.created_at.slice(4, 11)}</h5>
                </div>
                <p className="tweet_box__tweet_text"><span>{props.tweetData.text}</span></p>
                <div className="likes">
                    <i className="far fa-heart"></i><p className="likes_number">{props.tweetData.favorite_count}</p>
                </div>
            </div>
        </div>
    </div>
);


export default Tweet;