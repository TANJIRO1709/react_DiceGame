import React, { useState } from 'react';
import './App.css';
import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';

function App() {
  const [player1Dice, setPlayer1Dice] = useState(dice6);
  const [player2Dice, setPlayer2Dice] = useState(dice6);
  const [result, setResult] = useState('');

  const rollDice = () => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const randomImageSource1 = getDiceImage(randomNumber1);
    const randomImageSource2 = getDiceImage(randomNumber2);

    setPlayer1Dice(randomImageSource1);
    setPlayer2Dice(randomImageSource2);

    if (randomNumber1 > randomNumber2) {
      setResult('🚩 Player 1 Wins!');
    } else if (randomNumber2 > randomNumber1) {
      setResult('Player 2 Wins! 🚩');
    } else {
      setResult('Draw!');
    }
  };

  const getDiceImage = (number) => {
    switch (number) {
      case 1:
        return dice1;
      case 2:
        return dice2;
      case 3:
        return dice3;
      case 4:
        return dice4;
      case 5:
        return dice5;
      case 6:
        return dice6;
      default:
        return dice6;
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>{result || 'Refresh Me'}</h1>

          <div className="dice">
            <p>Player 1</p>
            <img className="img1" src={player1Dice} alt="Player 1 Dice" />
          </div>

          <div className="dice">
            <p>Player 2</p>
            <img className="img2" src={player2Dice} alt="Player 2 Dice" />
          </div>
        </div>
        <button onClick={rollDice} className='btn'>Roll Dice</button>
      </div>
      <footer>Made by Sujal Agarwal</footer>
    </>
  );
}

export default App;
