import React, { Component } from 'react';
import axios from 'axios';

class GameList extends Component {
    state = {
      games: []
    }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/games/?fields=name,genres.name,cover,popularity&order=popularity:desc&expand=genres`)
      .then(response => {
        this.setState({ games: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="game-container flex flex-wrap -mx-4">
          {this.state.games.map(game =>
            <a href="#" className="w-1/5 px-4 mb-12 no-underline" key={game.id}>
              <img src={game.cover.url.replace('t_thumb', 't_cover_big')} alt="cover" />
              <div className="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots">{game.name}</div>
              <div className="text-grey-darker text-base overflow-hidden whitespace-no-wrap overflow-dots pb-1">{game.genres[0].name}</div>
            </a>
          )}
        </div>
      </div>
    );
  }
}

export default GameList;
