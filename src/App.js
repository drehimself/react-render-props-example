import React, { Component } from 'react';
import GetJson from './GetJson';
import GridLayout from './GridLayout';

class App extends Component {
  render() {
    return (
      <div className="container mx-auto font-sans antialiased my-16 text-black">
        <h1 className="uppercase mb-8">Popular Games</h1>
        <GetJson endpoint="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=name,genres.name,cover,popularity&order=popularity:desc&expand=genres">
          {({response: games}) => (
            <GridLayout games={games} />
          )}
        </GetJson>

        <h1 className="uppercase mb-8">Vertical Layout</h1>
        <GetJson endpoint="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=name,genres.name,cover,popularity&order=popularity:desc&expand=genres">
          {({response: games}) => (
            <div className="game-container">
              {games.map(game =>
                <a href="#" className="block mb-12 no-underline flex" key={game.id}>
                  <img src={game.cover.url} alt="cover" />
                  <div className="ml-6">
                    <div className="text-black font-semibold text-lg">{ game.name }</div>
                    <div className="text-grey-darker text-base pb-1">{ game.genres[0].name }</div>
                  </div>
                </a>
              )}
            </div>
          )}
        </GetJson>

        <h1 className="uppercase mb-8">Search Results (Super Mario)</h1>
        <GetJson endpoint="https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?search=Super Mario&fields=name,cover,genres.name&expand=genres">
          {({response: games}) => (
            <GridLayout games={games} />
          )}
        </GetJson>

      </div>
    );
  }
}

export default App;
