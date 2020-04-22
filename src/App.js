import React from 'react';
import axios from 'axios';
import './App.css';

const testData = [
  {
    name: "Lucas", 
    company: "Github",
    userName: "LCapanelli", 
    avatar_url: "https://avatars2.githubusercontent.com/u/771530?s=60&v=4", 
    profile_url: "https://github.com/LCapanelli"
}
]; 

const CardList = (props) => (
  <div>
    { props.profiles.map(profile => <Card key={profile.id} { ...profile }/>) }
  </div>
);

class Card extends React.Component {
  render() {
    const profile = this.props; 
    return (
      <div className="Github-profile">
        <img className="Profile-image" src={ profile.avatar_url } alt="profile avatar"/>
        <div className="Info">
          <div className="Info-name">{ profile.name }</div>
          <a className="Info-userName" href={ profile.profile_url }>{ profile.userName }</a>
          <div className="Info-company">{ profile.company }</div>
          <div className="Info-location">{ profile.location }</div>
        </div>
      </div>
      ); 
  }
}; 

class Form extends React.Component {
  state = { userName: '' }; 
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${ this.state.userName }`);
    this.props.onSubmit(resp.data); 
    this.setState({
      userName: ''
    });
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input 
          type="text" 
          value={ this.state.userName }
          onChange={ event => this.setState({ userName: event.target.value })}
          placeholder="Type a Github username.." 
          required></input>
        <button>Add card</button>
      </form>
    );
  }
};

class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => (
      {
        profiles: [...prevState.profiles, profileData],
      }
    ));
  };
  render() {
    return (
      <div>
        <div className="Header">{ this.props.title }</div>
        <Form onSubmit={ this.addNewProfile }/>
        <CardList profiles={ this.state.profiles }/>
      </div>
    ); 
  }
}; 

export default App;
