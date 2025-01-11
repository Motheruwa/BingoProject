import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../css/Card.module.css'; // Import the CSS module for styling
import { useNavigate } from 'react-router-dom';
import Win from '../audio/WIN.mp4'
import Notwin from '../audio/NOTWIN.mp4'
function Card17() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const calledNumbers = new Set(JSON.parse(params.get('calledNumbers')));
  const [animateCurrent, setAnimateCurrent] = useState(false);
                    const [currentNumber, setCurrentNumber] = useState('');
                    useEffect(() => {
                      if (calledNumbers.size > 0) {
                        setCurrentNumber(Array.from(calledNumbers).pop());
                      }
                      // eslint-disable-next-line
                    }, []);
                  
                    useEffect(() => {
                      setAnimateCurrent(true);
                      
                      
                      const timeout = setTimeout(() => {
                        setAnimateCurrent(false);
                      }, 2000); // Duration of the 'current' animation
                      
                      return () => clearTimeout(timeout);
                      }, [currentNumber]);
  const navigate = useNavigate();
  const generateBingoCard = () => {
      const bingoCard = {
        B: [4, 10, 1, 6, 7],
        I: [30, 26, 27, 19, 21],
        N: [41, 33, 'free', 42, 38],
        G: [53, 46, 58, 59, 50],
        O: [71, 67, 72, 73, 70]
      };
  
      // Set the center cell as a free space
      bingoCard.N[2] = 'free';
  
      return bingoCard;
    };
  
    const checkWin = () => {
      const winConditions = [
        ['B4', 'B10', 'B1', 'B6', 'B7'], // First row (B)
        ['I30', 'I26', 'I27', 'I19', 'I21'], // Second row (I)
        ['N41', 'N33', 'free', 'N42', 'N38'], // Third row (N)
        ['G53', 'G46', 'G58', 'G59', 'G50'], // Fourth row (G)
        ['O71', 'O67', 'O72', 'O73', 'O70'], // Fifth row (O)
        ['B4', 'I26', 'free', 'G59', 'O70'], // Top-left to bottom-right diagonal
        ['O71', 'G46', 'free', 'I19', 'B7'], // Top-right to bottom-left diagonal
        ['B4', 'I30', 'N41', 'G53', 'O71'], // First column
        ['B10', 'I26', 'N33', 'G46', 'O67'], // Second column
        ['B1', 'I27', 'free', 'G58', 'O72'], // Third column
        ['B6', 'I19', 'N42', 'G59', 'O73'], // Fourth column
        ['B7', 'I21', 'N38', 'G50', 'O70'], // Fifth column
        ['B4', 'B7', 'O71', 'O70'] // Corner
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
    winningNumbers.includes('B4') &&
    winningNumbers.includes('B7') &&
    winningNumbers.includes('O71') &&
    winningNumbers.includes('O70');
  return (
    <div className={styles.container}>
                                          <div className={styles.current11}>
                                              <div className={`${styles.current} ${animateCurrent ? styles.animated : ''}`}>
                                                <h3>{currentNumber}</h3>
                                              </div>
                                            </div>
                                            <div className={styles.cont}>
                                            <div className={styles.cardnumber}>Card Number 17</div>
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
                                          
                                          
                                        </div>
  );
}

export default Card17;