import React from "react";

const Search = props => (
  <form onSubmit={props.getTweets} className="form__search" style={{marginBottom: "2rem"}}>
    <input type="text" className="form__input" name="searchName"/>
    < button className = "form__button" > Search </button>
  </form>
); 


export default Search;
