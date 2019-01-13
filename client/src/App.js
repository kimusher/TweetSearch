import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search.js";
import Tweets from "./components/Tweets.js";
//nimport { throws } from 'assert';





class App extends Component {

  state = {
    tweets: []
  }
  componentDidMount() {
  }

  getTweets = e => {
    e.preventDefault();
    const nameToSearch = e.target.elements.searchName.value;
    console.log(nameToSearch);


    fetch('/users', {
      method: 'post',
      body: JSON.stringify({ name: nameToSearch }),
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log("post data to server succsesfully")
    })
      .catch((err) => alert(err.message));
    
      fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ tweets: users }))
    console.log("fetch succsesfully");
    console.log(this.state.tweets);

  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Search for Tweets!</h1>
        </header>
        <Search getTweets={this.getTweets.bind(this)} />
        <Tweets tweets={this.state.tweets}></Tweets>
      </div>
    );
  }
}

export default App;