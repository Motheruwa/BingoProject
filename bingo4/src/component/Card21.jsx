import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css'; // Import the CSS module for styling
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4'
import Notwin from '../audio/NOTWIN.mp4'
function Card21() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const navigate = useNavigate();
  const generateBingoCard = () => {
    const bingoCard = {
      B: [8, 2, 13, 15, 6],
      I: [18, 30, 29, 27, 17],
      N: [39, 37, 'free', 31, 45],
      G: [54, 57, 56, 49, 52],
      O: [63, 75, 68, 67, 61]
    };

    // Set the center cell as a free space
    bingoCard.N[2] = 'free';

    return bingoCard;
  };

  const checkWin = () => {
    const winConditions = [
        ['B8', 'B2', 'B13', 'B15', 'B6'], // First row (B)
        ['I18', 'I30', 'I29', 'I27', 'I17'], // Second row (I)
        ['N39', 'N37', 'free', 'N31', 'N45'], // Third row (N)
        ['G54', 'G57', 'G56', 'G49', 'G52'], // Fourth row (G)
        ['O63', 'O75', 'O68', 'O67', 'O61'], // Fifth row (O)
        ['B8', 'I30', 'free', 'G49', 'O61'], // Top-left to bottom-right diagonal
        ['O63', 'G57', 'free', 'I27', 'B6'], // Top-right to bottom-left diagonal
        ['B8', 'I18', 'N39', 'G54', 'O63'], // First column
        ['B2', 'I30', 'N37', 'G57', 'O75'], // Second column
        ['B13', 'I29', 'free', 'G56', 'O68'], // Third column
        ['B15', 'I27', 'N31', 'G49', 'O67'], // Fourth column
        ['B6', 'I17', 'N45', 'G52', 'O61'], // Fifth column
        ['B8', 'B6', 'O63', 'O61'] // Corner
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
  winningNumbers.includes('B6') &&
  winningNumbers.includes('O63') &&
  winningNumbers.includes('O61');
  return (
    <div className={styles.container}>
      <div className={styles.cardnumber}>Card Number 21</div>
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

export default Card21;