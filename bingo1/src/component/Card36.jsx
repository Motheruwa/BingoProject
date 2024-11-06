import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css'; // Import the CSS module for styling
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4'
import Notwin from '../audio/NOTWIN.mp4'
function Card36() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const navigate = useNavigate();
  const generateBingoCard = () => {
    const bingoCard = {
      B: [12, 8, 14, 5, 7],
      I: [20, 21, 22, 17, 29],
      N: [45, 40, 'free', 33, 36],
      G: [60, 51, 53, 59, 54],
      O: [74, 70, 65, 71, 68]
    };

    // Set the center cell as a free space
    bingoCard.N[2] = 'free';

    return bingoCard;
  };

  const checkWin = () => {
    const winConditions = [
      ['B12', 'B8', 'B14', 'B5', 'B7'], // First row (B)
    ['I20', 'I21', 'I22', 'I17', 'I29'], // Second row (I)
    ['N45', 'N40', 'free', 'N33', 'N36'], // Third row (N)
    ['G60', 'G51', 'G53', 'G59', 'G54'], // Fourth row (G)
    ['O74', 'O70', 'O65', 'O71', 'O68'], // Fifth row (O)
    ['B12', 'I21', 'free', 'G59', 'O68'], // Top-left to bottom-right diagonal
    ['O74', 'G51', 'free', 'I17', 'B7'], // Top-right to bottom-left diagonal
    ['B12', 'I20', 'N45', 'G60', 'O74'], // First column
    ['B8', 'I21', 'N40', 'G51', 'O70'], // Second column
    ['B14', 'I22', 'free', 'G53', 'O65'], // Third column
    ['B5', 'I17', 'N33', 'G59', 'O71'], // Fourth column
    ['B7', 'I29', 'N36', 'G54', 'O68'], // Fifth column
    ['B12', 'B7', 'O74', 'O68'] // corner
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
  winningNumbers.includes('B2') &&
  winningNumbers.includes('B10') &&
  winningNumbers.includes('O62') &&
  winningNumbers.includes('O64');
  return (
    <div className={styles.container}>
      <div className={styles.cardnumber}>Card Number 36</div>
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

export default Card36;