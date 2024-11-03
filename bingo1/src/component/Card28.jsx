import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css'; // Import the CSS module for styling
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4'
import Notwin from '../audio/NOTWIN.mp4'
function Card28() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const navigate = useNavigate();
  const generateBingoCard = () => {
    const bingoCard = {
      B: [14, 11, 8, 6, 15],
      I: [27, 26, 19, 30, 29],
      N: [37, 40, 'free', 42, 38],
      G: [56, 52, 58, 57, 60],
      O: [72, 74, 64, 71, 73]
    };

    // Set the center cell as a free space
    bingoCard.N[2] = 'free';

    return bingoCard;
  };

  const checkWin = () => {
    const winConditions = [
      ['B14', 'B11', 'B8', 'B6', 'B15'], // First row (B)
      ['I27', 'I26', 'I19', 'I30', 'I29'], // Second row (I)
      ['N37', 'N40', 'free', 'N42', 'N38'], // Third row (N)
      ['G56', 'G52', 'G58', 'G57', 'G60'], // Fourth row (G)
      ['O72', 'O74', 'O64', 'O71', 'O73'], // Fifth row (O)
      ['B14', 'I26', 'free', 'G57', 'O73'], // Top-left to bottom-right diagonal
      ['O72', 'G52', 'free', 'I30', 'B15'], // Top-right to bottom-left diagonal
      ['B14', 'I27', 'N37', 'G56', 'O72'], // First column
      ['B11', 'I26', 'N40', 'G52', 'O74'], // Second column
      ['B8', 'I19', 'free', 'G58', 'O64'], // Third column
      ['B6', 'I30', 'N42', 'G57', 'O71'], // Fourth column
      ['B15', 'I29', 'N38', 'G60', 'O73'], // Fifth column
      ['B14', 'B15', 'O72', 'O73'] // corner
    ];

    const winningLines = [];
    for (const condition of winConditions) {
      if (condition.every(char => calledNumbers.has(char))) {
        winningLines.push(condition);
      }
    }

    if (winningLines.length > 0) {
      const winningNumbers = [...new Set(winningLines.flat())];
      return winningNumbers;
    }

    return [];
  };

  const bingoCard = generateBingoCard();
  const winningNumbers = checkWin();


  const handleResetAndNavigate = () => {
    localStorage.removeItem('calledNumbers');
    localStorage.removeItem('registeredNumbers');

    navigate('/registerdcard');
  };

  
  const handleGoBack = () => {
    navigate(-1); // Go back one step in the history stack
  };

  const audioWin = new Audio(Win);
  const audioNotwin = new Audio(Notwin);

  const playWinSound = () => {
    audioWin.play();
  };

  const playNotwinSound = () => {
    audioNotwin.play();
    audioNotwin.onended = function() {
        handleGoBack();
    };
};

  const isFourCornersWinning =
  winningNumbers.includes('B8') &&
  winningNumbers.includes('B15') &&
  winningNumbers.includes('O74') &&
  winningNumbers.includes('O70');
  return (
    <div className={styles.container}>
      <div className={styles.cardnumber}>Card Number 28</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.B}>B</th>
            <th className={styles.I}>I</th>
            <th className={styles.N}>N</th>
            <th className={styles.G}>G</th>
            <th className={styles.O}>O</th>
          </tr>
        </thead>
        <tbody>
        {[0, 1, 2, 3, 4].map((index) => (
          <tr key={index}>
            {Object.keys(bingoCard).map((letter) => {
              const number = bingoCard[letter][index];
              const isCalled = calledNumbers.has(`${letter}${number}`) || (number === 'free' && calledNumbers.has('free'));
              const isWinningNumber = winningNumbers.includes(`${letter}${number}`) || (number === 'free' && winningNumbers.includes('free'));
              const isCornerWinning = isFourCornersWinning && (letter === 'B' || letter === 'O') && (index === 0 || index === 4);

              const cellClassName = isWinningNumber
                ? isCornerWinning
                  ? styles.cornerwinning
                  : styles.winning
                : isCalled
                ? styles.called
                : '';
              return (
                <td >
                  <div key={number} className={cellClassName}>
                  {number}
                  </div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
      </table>
      <div className={styles.buttons}>
      <button onClick={playWinSound} className={styles.good}>Good Bingo</button>
      <button onClick={playNotwinSound} className={styles.add}>Not Bingo</button>
      <button onClick={ handleGoBack} className={styles.good}>Additional</button>
      <button onClick={handleResetAndNavigate} className={styles.add}>New Bingo</button>
      </div>
      
    </div>
  );
}

export default Card28;