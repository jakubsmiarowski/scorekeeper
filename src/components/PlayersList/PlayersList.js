import React from 'react';
import Player from '../Player/Player';
import './PlayerList.css';

const PlayersList = (props) => (
    <ul className="PlayersList">
        {props.players.map((player, i) => (
            <Player
                key={i}
                name={player.name}
                score={player.score}
                onPlayerScoreChange={(points) => props.onScoreUpdate(i, points)}
                onPlayerRemove={(player) => props.onPlayerUpdate(i, player)}
                />)
            )}
    </ul>
);

export default PlayersList;