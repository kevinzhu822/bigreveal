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
      <h1 className="Header">Enter Your First Name</h1>
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
    if (this.state.timesCleared < 6) {
      this.state.interval *= 0.6;
    } else {
      this.setState({interval: 300});
    }
  }

  clearLetters() {
    this.setState({currentWord: "", interval: 500, timesCleared: this.state.timesCleared+1});
    console.log(this.state.timesCleared);
    if (this.state.timesCleared == 6) {
      alert("Seems like you're having trouble so speedup has been disabled.");
    }
  }

  onSubmit(){
    switch(this.state.currentWord) {
      case "STEVEN":
        window.location.assign("https://open.spotify.com/playlist/5DDeGV79ACpD0eDFb4w1CT?si=jsvTL8WeSs2Xb7kM57p9Vw");
        break;
      case "SU MIN":
        window.location.assign("https://open.spotify.com/playlist/2S26xOLP8czrzaJ33zSnl9?si=YbZ8pa4TT1imfSwpRsQWfw");
        break;
      case "BRIAN":
        window.location.assign("https://open.spotify.com/playlist/4TzJ2aXGFMoRwBczej7ryt?si=LMoR5D_ZSyez734NkTRUMg");
        break;
      case "ESHAAN":
        window.location.assign("https://open.spotify.com/playlist/4ieRqlk7q85Dql9HQ9uudY?si=QTcl-BmMS7yn-QJYjcfhqQ");
        break;
      case "JAKE":
        window.location.assign("https://open.spotify.com/playlist/04RdvtiSFz5tMBmEugVbvd?si=scLC9f6ZQWmxEheq-d21mA");
        break;
      case "PAOLA":
        window.location.assign("https://open.spotify.com/playlist/3YxEc0JH3RgD37bnTVb6ri?si=-nQI-wKmRG2d5O47VxmJ5g");
        break;
      case "ANH":
        window.location.assign("https://open.spotify.com/playlist/1fSjwLJaqPNpD1z3454SQD?si=07zga9bNSKuTdexwmDyErA");
        break;
      case "LARYN":
        window.location.assign("https://open.spotify.com/playlist/0NpZ1PBRmwkqCwHIeecmCe?si=2NzeHqX4SheQPQ3amxo1iQ");
        break;
      case "BAILEY":
        window.location.assign("https://open.spotify.com/playlist/67PBlQXU60MqQBKT41FD2J?si=na7IXayTTwevXGgMQu049Q");
        break;
      case "KALEA":
        window.location.assign("https://open.spotify.com/playlist/0VKlsRO6EhONesb01WPGxC?si=DZVCQ7JdTa68Dqx3ccwhnQ");
        break;
      case "EMILY":
        window.location.assign("https://open.spotify.com/playlist/1D4loxBwE3tGXeTew6kDFa?si=47OCO5CzR8iwf93G3QFx5Q");
        break;
      case "LILY":
        window.location.assign("https://open.spotify.com/playlist/2plaDNmfWD4Y2YhAojPhLJ?si=8w1n1_XsRsqxKv_08DmNFg");
        break;
      case "JORGE":
        window.location.assign("https://open.spotify.com/playlist/74GF81QebbPF649H9oj6fl?si=sH3SyoA5Rqm1cYRE95ktvA");
        break;
      case "KENNEDY":
        window.location.assign("https://open.spotify.com/playlist/1YYO1xI6EKxPw3JYaSmphB?si=yP5jaBGfQoiz2DxX3Pi8Mw");
        break;
      default:
        window.location.assign("https://open.spotify.com/playlist/1rffTLjDq3Oepbe1amPgzM?si=I5fn06nlTe-bphlHLat5Pw");
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
