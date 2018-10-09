import React from 'react';

const GridLayout = props => {
  return (
    <div className="game-container flex flex-wrap -mx-4">
      {props.games.map(game =>
        <a href="#" className="w-1/4 px-4 mb-12 no-underline" key={game.id}>
          <img src={game.cover.url.replace('t_thumb', 't_cover_big')} alt="cover" />
          <div className="text-black font-semibold text-lg overflow-hidden whitespace-no-wrap overflow-dots">{game.name}</div>
          <div className="text-grey-darker text-base overflow-hidden whitespace-no-wrap overflow-dots pb-1">{game.genres[0].name}</div>
        </a>
      )}
    </div>
  );
};

export default GridLayout;
