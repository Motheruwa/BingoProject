import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css';
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4';
import Notwin from '../audio/NOTWIN.mp4';

function Card32() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const navigate = useNavigate();

  const generateBingoCard = () => {
    const bingoCard = {
      B: [5, 4, 3, 6, 13],
      I: [28, 24, 19, 21, 25],
      N: [33, 39, 'free', 40, 41],
      G: [49, 48, 50, 53, 54],
      O: [71, 70, 75, 64, 74]
    };

    bingoCard.N[2] = 'free'; // Set the center cell as a free space

    return bingoCard;
  };

  const checkWin = () => {
    const winConditions = [
      ['B5', 'B4', 'B3', 'B6', 'B13'], // First row (B)
    ['I28', 'I24', 'I19', 'I21', 'I25'], // Second row (I)
    ['N33', 'N39', 'free', 'N40', 'N41'], // Third row (N)
    ['G49', 'G48', 'G50', 'G53', 'G54'], // Fourth row (G)
    ['O71', 'O70', 'O75', 'O64', 'O74'], // Fifth row (O)
    ['B5', 'I24', 'free', 'G53', 'O74'], // Top-left to bottom-right diagonal
    ['O71', 'G48', 'free', 'I21', 'B13'], // Top-right to bottom-left diagonal
    ['B5', 'I28', 'N33', 'G49', 'O71'], // First column
    ['B4', 'I24', 'N39', 'G48', 'O70'], // Second column
    ['B3', 'I19', 'free', 'G50', 'O75'], // Third column
    ['B6', 'I21', 'N40', 'G53', 'O64'], // Fourth column
    ['B13', 'I25', 'N41', 'G54', 'O74'], // Fifth column
    ['B5', 'B13', 'O71', 'O74'] // Corner
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
  winningNumbers.includes('B10') &&
  winningNumbers.includes('B14') &&
  winningNumbers.includes('O73') &&
  winningNumbers.includes('O65');
  return (
    <div className={styles.container}>
      <div className={styles.cardnumber}>Card Number 32</div>
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
        <button onClick={handleGoBack} className={styles.good}>Additional</button>
        <button onClick={handleResetAndNavigate} className={styles.add}>New Bingo</button>
      </div>
    </div>
  );
}

export default Card32;