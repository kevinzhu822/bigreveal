import './App.css';
import React, { Component } from 'react';

class App extends Component {   
  constructor() {
    super();
    this.state = {
      index: 0,
      interval: 500,
      currentWord: "",
      url: "",
      timesCleared: 0,
    };

    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ␣";
    this.currentLetter = "";
    this.renderLetters = this.renderLetters.bind(this);
    this.addLetter = this.addLetter.bind(this);
    this.annoyingUpdate = this.annoyingUpdate.bind(this);
    this.createInputBox = this.createInputBox.bind(this);
    this.clearLetters = this.clearLetters.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.inputBox = this.createInputBox();
    this.renderedLetters = this.renderLetters(Date.now());
  }
  render() {
    this.renderedLetters = this.renderLetters(this.state.index);
    this.inputBox = this.createInputBox();
    return(
    <div className="App">
      <h1 className="Header">What is your favorite club?</h1>
      <div className="Letters">
        { this.renderedLetters }
      </div>
      <div className="InputBox">
        {this.inputBox}
      </div>
    </div>
    )
  };

  createInputBox(){
    var inputBox = 
    <div>
    <div className="BoxAndButton">
      <form>
        <input type="text" value={this.state.currentWord}/>
      </form>
    <button variant="primary" onClick={this.onSubmit}>Submit</button>
    </div>
    <button variant="primary" className="MyButton" onClick={this.addLetter}>Add Letter</button>
    <button variant="outline-primary" className="MyButton" onClick={this.clearLetters}>Clear</button>
    </div>
    return inputBox;
  }

  addLetter() {
    let letter = this.letters[this.state.index];
    if (letter === "␣") {
      letter = " ";
    }
    this.setState({currentWord: this.state.currentWord.concat(letter)});
    if (this.state.timesCleared < 9) {
      this.state.interval *= 0.6;
    } else {
      this.setState({interval: 300});
    }
  }

  clearLetters() {
    this.setState({currentWord: "", interval: 500, timesCleared: this.state.timesCleared+1});
    console.log(this.state.timesCleared);
    if (this.state.timesCleared == 9) {
      alert("Seems like you're having trouble so speedup has been disabled.");
    }
  }

  onSubmit(){
    switch(this.state.currentWord) {
      case "CODEBASE":
        window.location.assign("https://crosswordlabs.com/view/msd-19");
        break;
      default:
        window.location.assign("https://open.spotify.com/playlist/0WAgRPxOveAZrqgqlPDqAB?si=F30uCbUcRMSE82Iz3M6MSA");
        break;
      }
}
 
  annoyingUpdate() {
    this.setState({ index: (this.state.index + 1) % 27 });
    setTimeout(this.annoyingUpdate, this.state.interval);
  }
  renderLetters(index) {
    var highlighted = this.letters[index];
    var displayLetters = [];
    this.letters.split("").forEach(function (letter) {
      if (letter === highlighted) {
        displayLetters.push(<div className="Highlighted"> {letter} </div>);
      } else { 
      displayLetters.push(<div className="Letter"> {letter} </div>); 
      }
    });
    return displayLetters;
  }
  
  componentDidMount() {
    setTimeout(this.annoyingUpdate, this.state.interval);
  }
}

export default App;
