import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';

import './App.css';
import MoviesList from './pages/movies.page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MoviesList/>
      </div>
    );
  }
}

export default App;
