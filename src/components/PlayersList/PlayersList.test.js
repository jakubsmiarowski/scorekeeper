import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
    shallow( <PlayersList players={[]} /> );
});

it('renders correct number of players', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const playerComponent = shallow(<PlayersList players={players} />);
    console.log(playerComponent.debug());
    const expectedPlayersNumber = playerComponent.find(Player).length;
    expect(expectedPlayersNumber).toEqual(2);
})

it('checks if func is called', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]

    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(10);
    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
})

<<<<<<< HEAD
it('calls onPlayerRemove with correct values', () => {
=======
it('should remove player from the list', () => {
>>>>>>> f9cffc2e3e508726a50b9716cbe861770ca9c546
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]

<<<<<<< HEAD
    const mockedPlayerRemove = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedPlayerRemove} />);
    const secondPlayer = playerComponent.find(Player).at(1);
    const onPlayerRemove = secondPlayer.prop('onPlayerRemove');
    onPlayerRemove();

    expect(mockedPlayerRemove).toBeCalledWith(1);
=======
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
    const player = playerComponent.find(Player).;
    const onPlayerRemove = firstPlayer.prop('onPlayerRemove');
    onPlayerRemove('Kunegunda');

    expect(mockedOnPlayerRemove).toEqual(players);
>>>>>>> f9cffc2e3e508726a50b9716cbe861770ca9c546
})