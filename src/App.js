import React, { Component } from 'react';
import GameList from './GameList';

class App extends Component {
  render() {
    return (
      <div className="container mx-auto font-sans antialiased my-16 text-black">
        <h1 className="uppercase mb-8">Popular Games</h1>
        <GameList />
      </div>
    );
  }
}

export default App;
