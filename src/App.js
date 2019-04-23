import React, { Component } from "react";
import CartoonFinder from "./components/CartoonFinder";
import Character from "./components/Character";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

    // Fisher-Yates Shuffle from https://www.frankmitchell.org/2015/01/fisher-yates/
    shuffleFriends = (array) => {
      let i = 0
        , j = 0
        , temp = null
    
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array;
    };

  clickFriend = id => {
    //find current friend
    let newScore = this.state.score;
    const friends = this.state.friends.map(friend =>{
      
      //If the current friend's clicked property = false change it
      if (friend.id === id && friend.clicked === false){
        friend.clicked = true;
      
        //update score
        newScore ++;
        
      }

      else if (friend.id === id && friend.clicked === true){
        //game over
      }
      return friend
   });
    // Set this.state.friends equal to the new friends array
    this.setState({ 
      friends: this.shuffleFriends(friends), 
      score: newScore 
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Character>
        <Title>Friends List</Title>
        <div class="container">
          <div class="jumbotron">
          
              <h1>React Clicky Game</h1>
              <div class="butcontainer">
                  <button type="button" class="btn btn-default btn-lg btn-primary">
                  <span>Score: {this.state.score}</span>
                  </button>
              </div>
          </div>
        </div>
        {this.state.friends.map(friend => (
          <CartoonFinder
            clickFriend={this.clickFriend}
            id={friend.id}
            image={friend.image}
            key={friend.id}
            clicked={friend.clicked}
          />
        ))}
      </Character>
    );
  }
}

export default App;
