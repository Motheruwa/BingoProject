import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css'; // Import the CSS module for styling
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4'
import Notwin from '../audio/NOTWIN.mp4'
function Card27() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const navigate = useNavigate();
  const generateBingoCard = () => {
    const bingoCard = {
      B: [10, 7, 2, 13, 6],
      I: [28, 17, 22, 25, 23],
      N: [45, 34, 'free', 36, 41],
      G: [59, 54, 49, 46, 48],
      O: [70, 61, 75, 73, 71]
    };

    // Set the center cell as a free space
    bingoCard.N[2] = 'free';

    return bingoCard;
  };

  const checkWin = () => {
    const winConditions = [
      ['B10', 'B7', 'B2', 'B13', 'B6'], // First row (B)
      ['I28', 'I17', 'I22', 'I25', 'I23'], // Second row (I)
      ['N45', 'N34', 'free', 'N36', 'N41'], // Third row (N)
      ['G59', 'G54', 'G49', 'G46', 'G48'], // Fourth row (G)
      ['O70', 'O61', 'O75', 'O73', 'O71'], // Fifth row (O)
      ['B10', 'I17', 'free', 'G46', 'O71'], // Top-left to bottom-right diagonal
      ['O70', 'G54', 'free', 'I25', 'B6'], // Top-right to bottom-left diagonal
      ['B10', 'I28', 'N45', 'G59', 'O70'], // First column
      ['B7', 'I17', 'N34', 'G54', 'O61'], // Second column
      ['B2', 'I22', 'free', 'G49', 'O75'], // Third column
      ['B13', 'I25', 'N36', 'G46', 'O73'], // Fourth column
      ['B6', 'I23', 'N41', 'G48', 'O71'], // Fifth column
      ['B10', 'B6', 'O70', 'O71'] // corner
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
  winningNumbers.includes('B11') &&
  winningNumbers.includes('B13') &&
  winningNumbers.includes('O75') &&
  winningNumbers.includes('O64');
  return (
    <div className={styles.container}>
      <div className={styles.cardnumber}>Card Number 27</div>
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

export default Card27;