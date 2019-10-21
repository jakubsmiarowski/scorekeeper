import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
    shallow( < App / > );
});

it('should update player score', () => {
    const appComponent = shallow( < App / > );
    const players = [{
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    appComponent.setState({ players });

    const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
    onScoreUpdate(0, 5);
    const playersAfterUpdate = appComponent.state('players');

    expect(playersAfterUpdate[0].score).toEqual(10)
});

<<<<<<< HEAD
it('should add player to state', () => {
    const appComponent = shallow( < App / > );
    const players = [{ name: "Antoś", score: 13 }];
    appComponent.setState({ players });
=======
it('should add player', () => {
    const appComponent = shallow(<App />);
>>>>>>> f9cffc2e3e508726a50b9716cbe861770ca9c546
    const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
    onPlayerAdd('Ania');
    const newPlayers = appComponent.state('players');


    expect(newPlayers.length).toEqual(1);
    expect(newPlayers[0].name).toEqual('Ania');
    expect(newPlayers[0].score).toEqual(0);
});

<<<<<<< HEAD
it('should update player list', () => {
    const appComponent = shallow( < App / > );
    const players = [{
=======
it('should remove player', () => {
    const appComponent = shallow(<App />);
    const players = [
        {
>>>>>>> f9cffc2e3e508726a50b9716cbe861770ca9c546
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    appComponent.setState({ players });
    const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
<<<<<<< HEAD
    onPlayerRemove(0);
    const playersAfterUpdate = appComponent.state().players;

    expect(playersAfterUpdate.length).toEqual(1);
    expect(playersAfterUpdate[0].name).toEqual('Antoś');
    expect(playersAfterUpdate[0].score).toEqual(0);
=======
    console.log(players);
    onPlayerRemove();

    expect(players.length).toEqual(1);
    expect(players[0].name).toEqual('Kunegunda');
    expect(players[0].score).toEqual(0);
>>>>>>> f9cffc2e3e508726a50b9716cbe861770ca9c546
});