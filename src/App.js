import React, { Component } from "react";
import "./App.css";
import PlayersList from "./components/PlayersList/PlayersList";
import AddPlayer from "./components/AddPlayer/AddPlayer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
    };
  }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      }),
    });
  };

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    };
    this.setState({
      players: [...this.state.players, newPlayer],
    });
  };

  onPlayerRemove = (playerIndex) => {
    const playersLeft = this.state.players.filter(
      (player, index) => index !== playerIndex
    );
    this.setState({ players: playersLeft });
  };

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h3>Board Game Scorekeeper</h3>
          <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        </div>
        <PlayersList
          players={this.state.players}
          onScoreUpdate={this.onScoreUpdate}
          onPlayerRemove={this.onPlayerRemove}
        />
      </div>
    );
  }
}

export default App;
