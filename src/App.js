import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Wrapper from './components/Wrapper/Wrapper';
import Card from './components/Card/Card';
import Title from './components/Title/Title';
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import characters from './characters.json';

//take in an array and shuffle using the Math.random method
//TODO: Add the .sort from W3Schools
function charactersArr(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
return array;
};

class App extends Component {
//set the state of characters, score, highscore, and clicked
state = {
  characters,
  score: 0,
  highscore: 0,
  clicked: [],
  alert: ""
};

//if the character that has not already been clicked is clicked, increment the score by one and add the id of this character to the clicked array in state
handleClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.handleIncrement();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
//if the character has already been clicked, reset the game
    this.handleReset();
  }
};

//add one to the score and set it equal to newScore, update the value of state for score
handleIncrement = () => {
  const newScore = this.state.score + 1;
  this.setState({
    score: newScore
  });
  //if newScore is higher than highScore, set a new highScore
  if (newScore >= this.state.highscore) {
    this.setState({ highscore: newScore });
  }
  //if players newScore equals 12 they win
  else if (newScore === 12) {
    this.setState({ alert: "You win!" });
  }
  //shuffle the cards
  this.handleShuffle();
};

//once a player is clicked twice, reset the game - setting state back to original values
handleReset = () => {
  this.setState({
    score: 0,
    highscore: this.state.highscore,
    clicked: []
  });
  this.handleShuffle();
};


//ASK - This builds a new array but how?
handleShuffle = () => {
  let shuffledCharacters = charactersArr(characters);
  this.setState({ characters: shuffledCharacters });
};

//TODO:Add the words "score" and "highscore"
  render() {
    return (
      <Wrapper>
        <Navbar
          title="Simpsons Game"
          score={this.state.score}
          highscore={this.state.highscore}
        />
        <Title>Game Description</Title>
        <Container>
          <Row>
            {this.state.characters.map(character =>(
            <Column size="md-3 sm-6" key={character.id}>
              <Card
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
               id={character.id}
              image={character.image}
              />
            </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
