import React from 'react';
import Player from './Player';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow( < Player /> );
});

it('renders correct name', () => {
    const playerNamePassed = 'Ania';
    const playerComponent = shallow(<Player name={playerNamePassed} />);

    const playerNameRendered = playerComponent.find('.Player__name').text();

    expect(playerNameRendered).toEqual(playerNamePassed);
})

it('renders correct score', () => {
    const playerScore = 13;
    const playerComponent = shallow(<Player score={playerScore} />);

    const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

    expect(playerScoreRendered).toEqual(playerScore);
})

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const plusButton = playerComponent.find('.Player__button').first();

    plusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
})

it('should call onPlayerScoreChange with 1 when minus button is clicked', () => {
    const mockedOnPlayerScoreChange = jest.fn();
    const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

    const minusButton = playerComponent.find('.Player__button').at(1);

    minusButton.simulate('click');

    expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
})

it('should remove player from list', () => {
    
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<Player onPlayerRemove={mockedOnPlayerRemove} />);

    const removePlayerButton = playerComponent.find('.Player__button').last();

    removePlayerButton.simulate('click');

<<<<<<< HEAD
    expect(mockedOnPlayerRemove).toBeCalled();
=======
    expect(mockedOnPlayerRemove).toEqual(players);
>>>>>>> f9cffc2e3e508726a50b9716cbe861770ca9c546
})