import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import { Jumbotron, Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
      <Jumbotron>
        <Grid>
          <h1>Salut a tous!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <SearchForm/>
        </Grid>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
