import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css'; // Import the CSS module for styling
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4'
import Notwin from '../audio/NOTWIN.mp4'
function Card47() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const navigate = useNavigate();
  const generateBingoCard = () => {
    const bingoCard = {
      B: [15, 13, 12, 6, 14],
      I: [29, 25, 28, 21, 26],
      N: [43, 37, 'free', 32, 41],
      G: [60, 56, 55, 47, 46],
      O: [75, 67, 72, 65, 73]
    };

    // Set the center cell as a free space
    bingoCard.N[2] = 'free';

    return bingoCard;
  };

  const checkWin = () => {
    const winConditions = [
      ['B15', 'B13', 'B12', 'B6', 'B14'], // First row (B)
      ['I29', 'I25', 'I28', 'I21', 'I26'], // Second row (I)
      ['N43', 'N37', 'free', 'N32', 'N41'], // Third row (N)
      ['G60', 'G56', 'G55', 'G47', 'G46'], // Fourth row (G)
      ['O75', 'O67', 'O72', 'O65', 'O73'], // Fifth row (O)
      ['B15', 'I25', 'free', 'G47', 'O73'], // Top-left to bottom-right diagonal
      ['O75', 'G56', 'free', 'I21', 'B14'], // Top-right to bottom-left diagonal
      ['B15', 'I29', 'N43', 'G60', 'O75'], // First column
      ['B13', 'I25', 'N37', 'G56', 'O67'], // Second column
      ['B12', 'I28', 'free', 'G55', 'O72'], // Third column
      ['B6', 'I21', 'N32', 'G47', 'O65'], // Fourth column
      ['B14', 'I26', 'N41', 'G46', 'O73'], // Fifth column
      ['B15', 'B14', 'O75', 'O73'] // corner
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
  winningNumbers.includes('B5') &&
  winningNumbers.includes('B4') &&
  winningNumbers.includes('O70') &&
  winningNumbers.includes('O74');

  return (
    <div className={styles.container}>
      <div className={styles.cardnumber}>Card Number 47</div>
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

export default Card47;