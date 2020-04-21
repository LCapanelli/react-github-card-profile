import React from 'react';
import logo from './logo.svg';
import './App.css';

//card
//list

class Card extends React.Component {
  render() {
    return (
      <div className="Github-profile">
        <img className="Profile-image" src="https://placehold.it/75" />
        <div className="Info">
          <div className="Info.Name">name here</div>
          <div className="Info.Company">company here</div>
        </div>
      </div>
      ); 
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="Header">{this.props.title}</div>
        <Card />
      </div>
    ); 
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
