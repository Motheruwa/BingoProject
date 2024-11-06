import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css'; // Import the CSS module for styling
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4';
import Notwin from '../audio/NOTWIN.mp4';

function Card50() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const navigate = useNavigate();

  const generateBingoCard = () => {
    const bingoCard = {
      B: [5, 10, 12, 6, 15],
      I: [28, 26, 17, 25, 30],
      N: [41, 37, 'free', 35, 32],
      G: [57, 47, 54, 46, 55],
      O: [73, 71, 64, 74, 70]
    };

    // Set the center cell as a free space
    bingoCard.N[2] = 'free';

    return bingoCard;
  };

  const checkWin = () => {
    const winConditions = [
      ['B5', 'B10', 'B12', 'B6', 'B15'], // First row (B)
    ['I28', 'I26', 'I17', 'I25', 'I30'], // Second row (I)
    ['N41', 'N37', 'free', 'N35', 'N32'], // Third row (N)
    ['G57', 'G47', 'G54', 'G46', 'G55'], // Fourth row (G)
    ['O73', 'O71', 'O64', 'O74', 'O70'], // Fifth row (O)
    ['B5', 'I26', 'free', 'G46', 'O70'], // Top-left to bottom-right diagonal
    ['O73', 'G47', 'free', 'I25', 'B15'], // Top-right to bottom-left diagonal
    ['B5', 'I28', 'N41', 'G57', 'O73'], // First column
    ['B10', 'I26', 'N37', 'G47', 'O71'], // Second column
    ['B12', 'I17', 'free', 'G54', 'O64'], // Third column
    ['B6', 'I25', 'N35', 'G46', 'O74'], // Fourth column
    ['B15', 'I30', 'N32', 'G55', 'O70'], // Fifth column
    ['B5', 'B15', 'O73', 'O70'] // corner
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
  winningNumbers.includes('B3') &&
  winningNumbers.includes('B15') &&
  winningNumbers.includes('O69') &&
  winningNumbers.includes('O64');
  
  return (
    <div className={styles.container}>
      <div className={styles.cardnumber}>Card Number 50</div>
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
        <button onClick={playWinSound} className={styles.good}>
          Good Bingo
        </button>
        <button onClick={playNotwinSound} className={styles.add}>
          Not Bingo
        </button>
        <button onClick={handleGoBack} className={styles.good}>
          Additional
        </button>
        <button onClick={handleResetAndNavigate} className={styles.add}>
          New Bingo
        </button>
      </div>
    </div>
  );
}

export default Card50;