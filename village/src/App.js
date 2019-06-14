import React, { Component } from 'react';

import axios from 'axios';
import { Route } from 'react-router-dom';
import Navigation from './components/Navigation';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  componentDidMount() {    
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(error => console.log(error));
  }

  addSmurf = item => {
    axios
    .post('http://localhost:3333/smurfs', item)
    .then(res => {
      this.setState({ smurfs: res.data });
      // this.props.history.push('/friends');
    })
    .catch(err => console.log(err));
  }
  openSmurfForm = () => {
    
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path="/smurf-form"           
        render={props => (
            <SmurfForm {...props}                            
            addSmurf={this.addSmurf}
            />
          )} />          

        <Route exact path="/" 
          render={props => (
          <Smurfs {...props}              
            smurfs={this.state.smurfs}            
          />
        )} />          
      </div>
    );
  }
}

export default App;
