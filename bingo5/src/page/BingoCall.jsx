import React, { useEffect, useState } from 'react';
import styles from '../css/BingoCall.module.css';
import Bingocard from '../images/bingocard.jpg'
import { MdOutlineStarRate } from "react-icons/md";
import B1 from '../audio/B1.mp4'
import B2 from '../audio/B2.mp4'
import B3 from '../audio/B3.mp4'
import B4 from '../audio/B4.mp4'
import B5 from '../audio/B5.mp4'
import B6 from '../audio/B6.mp4'
import B7 from '../audio/B7.mp4'
import B8 from '../audio/B8.mp4'
import B9 from '../audio/B9.mp4'
import B10 from '../audio/B10.mp4'
import B11 from '../audio/B11.mp4'
import B12 from '../audio/B12.mp4'
import B13 from '../audio/B13.mp4'
import B14 from '../audio/B14.mp4'
import B15 from '../audio/B15.mp4'
import I16 from '../audio/I16.mp4'
import I17 from '../audio/I17.mp4'
import I18 from '../audio/I18.mp4'
import I19 from '../audio/I19.mp4'
import I20 from '../audio/I20.mp4'
import I21 from '../audio/I21.mp4'
import I22 from '../audio/I22.mp4'
import I23 from '../audio/I23.mp4'
import I24 from '../audio/I24.mp4'
import I25 from '../audio/I25.mp4'
import I26 from '../audio/I26.mp4'
import I27 from '../audio/I27.mp4'
import I28 from '../audio/I28.mp4'
import I29 from '../audio/I29.mp4'
import I30 from '../audio/I30.mp4'
import N31 from '../audio/N31.mp4'
import N32 from '../audio/N32.mp4'
import N33 from '../audio/N33.mp4'
import N34 from '../audio/N34.mp4'
import N35 from '../audio/N35.mp4'
import N36 from '../audio/N36.mp4'
import N37 from '../audio/N37.mp4'
import N38 from '../audio/N38.mp4'
import N39 from '../audio/N39.mp4'
import N40 from '../audio/N40.mp4'
import N41 from '../audio/N41.mp4'
import N42 from '../audio/N42.mp4'
import N43 from '../audio/N43.mp4'
import N44 from '../audio/N44.mp4'
import N45 from '../audio/N45.mp4'
import G46 from '../audio/G46.mp4'
import G47 from '../audio/G47.mp4'
import G48 from '../audio/G48.mp4'
import G49 from '../audio/G49.mp4'
import G50 from '../audio/G50.mp4'
import G51 from '../audio/G51.mp4'
import G52 from '../audio/G52.mp4'
import G53 from '../audio/G53.mp4'
import G54 from '../audio/G54.mp4'
import G55 from '../audio/G55.mp4'
import G56 from '../audio/G56.mp4'
import G57 from '../audio/G57.mp4'
import G58 from '../audio/G58.mp4'
import G59 from '../audio/G59.mp4'
import G60 from '../audio/G60.mp4'
import O61 from '../audio/O61.mp4'
import O62 from '../audio/O62.mp4'
import O63 from '../audio/O63.mp4'
import O64 from '../audio/O64.mp4'
import O65 from '../audio/O65.mp4'
import O66 from '../audio/O66.mp4'
import O67 from '../audio/O67.mp4'
import O68 from '../audio/O68.mp4'
import O69 from '../audio/O69.mp4'
import O70 from '../audio/O70.mp4'
import O71 from '../audio/O71.mp4'
import O72 from '../audio/O72.mp4'
import O73 from '../audio/O73.mp4'
import O74 from '../audio/O74.mp4'
import O75 from '../audio/O75.mp4'

import BB1 from '../audio/BB1.mp4'
import BB2 from '../audio/BB2.mp4'
import BB3 from '../audio/BB3.mp4'
import BB4 from '../audio/BB4.mp4'
import BB5 from '../audio/BB5.mp4'
import BB6 from '../audio/BB6.mp4'
import BB7 from '../audio/BB7.mp4'
import BB8 from '../audio/BB8.mp4'
import BB9 from '../audio/BB9.mp4'
import BB10 from '../audio/BB10.mp4'
import BB11 from '../audio/BB11.mp4'
import BB12 from '../audio/BB12.mp4'
import BB13 from '../audio/BB13.mp4'
import BB14 from '../audio/BB14.mp4'
import BB15 from '../audio/BB15.mp4'
import II16 from '../audio/II16.mp4'
import II17 from '../audio/II17.mp4'
import II18 from '../audio/II18.mp4'
import II19 from '../audio/II19.mp4'
import II20 from '../audio/II20.mp4'
import II21 from '../audio/II21.mp4'
import II22 from '../audio/II22.mp4'
import II23 from '../audio/II23.mp4'
import II24 from '../audio/II24.mp4'
import II25 from '../audio/II25.mp4'
import II26 from '../audio/II26.mp4'
import II27 from '../audio/II27.mp4'
import II28 from '../audio/II28.mp4'
import II29 from '../audio/II29.mp4'
import II30 from '../audio/II30.mp4'
import NN31 from '../audio/NN31.mp4'
import NN32 from '../audio/NN32.mp4'
import NN33 from '../audio/NN33.mp4'
import NN34 from '../audio/NN34.mp4'
import NN35 from '../audio/NN35.mp4'
import NN36 from '../audio/NN36.mp4'
import NN37 from '../audio/NN37.mp4'
import NN38 from '../audio/NN38.mp4'
import NN39 from '../audio/NN39.mp4'
import NN40 from '../audio/NN40.mp4'
import NN41 from '../audio/NN41.mp4'
import NN42 from '../audio/NN42.mp4'
import NN43 from '../audio/NN43.mp4'
import NN44 from '../audio/NN44.mp4'
import NN45 from '../audio/NN45.mp4'
import GG46 from '../audio/GG46.mp4'
import GG47 from '../audio/GG47.mp4'
import GG48 from '../audio/GG48.mp4'
import GG49 from '../audio/GG49.mp4'
import GG50 from '../audio/GG50.mp4'
import GG51 from '../audio/GG51.mp4'
import GG52 from '../audio/GG52.mp4'
import GG53 from '../audio/GG53.mp4'
import GG54 from '../audio/GG54.mp4'
import GG55 from '../audio/GG55.mp4'
import GG56 from '../audio/GG56.mp4'
import GG57 from '../audio/GG57.mp4'
import GG58 from '../audio/GG58.mp4'
import GG59 from '../audio/GG59.mp4'
import GG60 from '../audio/GG60.mp4'
import OO61 from '../audio/OO61.mp4'
import OO62 from '../audio/OO62.mp4'
import OO63 from '../audio/OO63.mp4'
import OO64 from '../audio/OO64.mp4'
import OO65 from '../audio/OO65.mp4'
import OO66 from '../audio/OO66.mp4'
import OO67 from '../audio/OO67.mp4'
import OO68 from '../audio/OO68.mp4'
import OO69 from '../audio/OO69.mp4'
import OO70 from '../audio/OO70.mp4'
import OO71 from '../audio/OO71.mp4'
import OO72 from '../audio/OO72.mp4'
import OO73 from '../audio/OO73.mp4'
import OO74 from '../audio/OO74.mp4'
import OO75 from '../audio/OO75.mp4'
export const BingoCall = ({ currentNumber, calledNumbers,totalAmount }) => {
  const [animateCurrent, setAnimateCurrent] = useState(false);

useEffect(() => {
setAnimateCurrent(true);


const timeout = setTimeout(() => {
  setAnimateCurrent(false);
}, 2000); // Duration of the 'current' animation

return () => clearTimeout(timeout);
}, [currentNumber]);

useEffect(() => {
  // Retrieve selectedName from localStorage
  const savedName = localStorage.getItem('selectedName');
  // Call the appropriate function based on the selected name
  switch (savedName) {
    case 'ngus':
      playAudioForNumberNgus(currentNumber);
      break;
    case 'bereket':
      playAudioForNumberBereket(currentNumber);
      break;
    case 'Xbingo':
      playAudioForNumber(currentNumber);
      break;
    default:
      playAudioForNumber(currentNumber);
  }
}, [currentNumber]);

const playAudioForNumberBereket = (number) =>{

}
const playAudioForNumberNgus = (number) =>{
  let audio;

    switch (number) {
      case 'B1':
        audio = new Audio(BB1);
        break;
      case 'B2':
        audio = new Audio(BB2);
        break;
      case 'B3':
        audio = new Audio(BB3);
        break;
        case 'B4':
          audio = new Audio(BB4);
          break;
          case 'B5':
          audio = new Audio(BB5);
          break;
          case 'B6':
          audio = new Audio(BB6);
          break;
          case 'B7':
          audio = new Audio(BB7);
          break;
          case 'B8':
          audio = new Audio(BB8);
          break;
          case 'B9':
          audio = new Audio(BB9);
          break;
          case 'B10':
          audio = new Audio(BB10);
          break;
          case 'B11':
          audio = new Audio(BB11);
          break;
          case 'B12':
          audio = new Audio(BB12);
          break;
          case 'B13':
          audio = new Audio(BB13);
          break;
          case 'B14':
            audio = new Audio(BB14);
            break;
            case 'B15':
            audio = new Audio(BB15);
            break;
            case 'I16':
              audio = new Audio(II16);
              break;
              case 'I17':
              audio = new Audio(II17);
              break;
              case 'I18':
              audio = new Audio(II18);
              break;
              case 'I19':
              audio = new Audio(II19);
              break;
              case 'I20':
              audio = new Audio(II20);
              break;
              case 'I21':
              audio = new Audio(II21);
              break;
              case 'I22':
              audio = new Audio(II22);
              break;
              case 'I23':
              audio = new Audio(II23);
              break;
              case 'I24':
              audio = new Audio(II24);
              break;
              case 'I25':
              audio = new Audio(II25);
              break;
              case 'I26':
              audio = new Audio(II26);
              break;
              case 'I27':
              audio = new Audio(II27);
              break;
              case 'I28':
              audio = new Audio(II28);
              break;
              case 'I29':
              audio = new Audio(II29);
              break;
              case 'I30':
              audio = new Audio(II30);
              break;
              case 'N31':
              audio = new Audio(NN31);
              break;
              case 'N32':
              audio = new Audio(NN32);
              break;
              case 'N33':
              audio = new Audio(NN33);
              break;
              case 'N34':
              audio = new Audio(NN34);
              break;
              case 'N35':
              audio = new Audio(NN35);
              break;
              case 'N36':
              audio = new Audio(NN36);
              break;
              case 'N37':
              audio = new Audio(NN37);
              break;
              case 'N38':
              audio = new Audio(NN38);
              break;
              case 'N39':
              audio = new Audio(NN39);
              break;
              case 'N40':
              audio = new Audio(NN40);
              break;
              case 'N41':
              audio = new Audio(NN41);
              break;
              case 'N42':
              audio = new Audio(NN42);
              break;
              case 'N43':
              audio = new Audio(NN43);
              break;
              case 'N44':
              audio = new Audio(NN44);
              break;
              case 'N45':
              audio = new Audio(NN45);
              break;
              case 'G46':
              audio = new Audio(GG46);
              break;
              case 'G47':
              audio = new Audio(GG47);
              break;
              case 'G48':
              audio = new Audio(GG48);
              break;
              case 'G49':
              audio = new Audio(GG49);
              break;
              case 'G50':
              audio = new Audio(GG50);
              break;
              case 'G51':
              audio = new Audio(GG51);
              break;
              case 'G52':
              audio = new Audio(GG52);
              break;
              case 'G53':
              audio = new Audio(GG53);
              break;
              case 'G54':
              audio = new Audio(GG54);
              break;
              case 'G55':
              audio = new Audio(GG55);
              break;
              case 'G56':
              audio = new Audio(GG56);
              break;
              case 'G57':
              audio = new Audio(GG57);
              break;
              case 'G58':
              audio = new Audio(GG58);
              break;
              case 'G59':
              audio = new Audio(GG59);
              break;
              case 'G60':
              audio = new Audio(GG60);
              break;
              case 'O61':
              audio = new Audio(OO61);
              break;
              case 'O62':
              audio = new Audio(OO62);
              break;
              case 'O63':
              audio = new Audio(OO63);
              break;
              case 'O64':
              audio = new Audio(OO64);
              break;
              case 'O65':
              audio = new Audio(OO65);
              break;
              case 'O66':
              audio = new Audio(OO66);
              break;
              case 'O67':
              audio = new Audio(OO67);
              break;
              case 'O68':
              audio = new Audio(OO68);
              break;
              case 'O69':
              audio = new Audio(OO69);
              break;
              case 'O70':
              audio = new Audio(OO70);
              break;
              case 'O71':
              audio = new Audio(OO71);
              break;
              case 'O72':
              audio = new Audio(OO72);
              break;
              case 'O73':
              audio = new Audio(OO73);
              break;
              case 'O74':
              audio = new Audio(OO74);
              break;
              case 'O75':
              audio = new Audio(OO75);
              break;
      default:
        // Handle cases where no audio needs to be played
        break;
      }

      if (audio) {
        audio.play();
    
        // Pause the audio after 3 seconds
        setTimeout(() => {
          audio.pause();
          audio.currentTime = 0; // Reset audio to the beginning
        }, 3000); // Duration of 3 seconds
      }
};

  const playAudioForNumber = (number) => {
    let audio;

    switch (number) {
      case 'B1':
        audio = new Audio(B1);
        break;
      case 'B2':
        audio = new Audio(B2);
        break;
      case 'B3':
        audio = new Audio(B3);
        break;
        case 'B4':
          audio = new Audio(B4);
          break;
          case 'B5':
          audio = new Audio(B5);
          break;
          case 'B6':
          audio = new Audio(B6);
          break;
          case 'B7':
          audio = new Audio(B7);
          break;
          case 'B8':
          audio = new Audio(B8);
          break;
          case 'B9':
          audio = new Audio(B9);
          break;
          case 'B10':
          audio = new Audio(B10);
          break;
          case 'B11':
          audio = new Audio(B11);
          break;
          case 'B12':
          audio = new Audio(B12);
          break;
          case 'B13':
          audio = new Audio(B13);
          break;
          case 'B14':
            audio = new Audio(B14);
            break;
            case 'B15':
            audio = new Audio(B15);
            break;
            case 'I16':
              audio = new Audio(I16);
              break;
              case 'I17':
              audio = new Audio(I17);
              break;
              case 'I18':
              audio = new Audio(I18);
              break;
              case 'I19':
              audio = new Audio(I19);
              break;
              case 'I20':
              audio = new Audio(I20);
              break;
              case 'I21':
              audio = new Audio(I21);
              break;
              case 'I22':
              audio = new Audio(I22);
              break;
              case 'I23':
              audio = new Audio(I23);
              break;
              case 'I24':
              audio = new Audio(I24);
              break;
              case 'I25':
              audio = new Audio(I25);
              break;
              case 'I26':
              audio = new Audio(I26);
              break;
              case 'I27':
              audio = new Audio(I27);
              break;
              case 'I28':
              audio = new Audio(I28);
              break;
              case 'I29':
              audio = new Audio(I29);
              break;
              case 'I30':
              audio = new Audio(I30);
              break;
              case 'N31':
              audio = new Audio(N31);
              break;
              case 'N32':
              audio = new Audio(N32);
              break;
              case 'N33':
              audio = new Audio(N33);
              break;
              case 'N34':
              audio = new Audio(N34);
              break;
              case 'N35':
              audio = new Audio(N35);
              break;
              case 'N36':
              audio = new Audio(N36);
              break;
              case 'N37':
              audio = new Audio(N37);
              break;
              case 'N38':
              audio = new Audio(N38);
              break;
              case 'N39':
              audio = new Audio(N39);
              break;
              case 'N40':
              audio = new Audio(N40);
              break;
              case 'N41':
              audio = new Audio(N41);
              break;
              case 'N42':
              audio = new Audio(N42);
              break;
              case 'N43':
              audio = new Audio(N43);
              break;
              case 'N44':
              audio = new Audio(N44);
              break;
              case 'N45':
              audio = new Audio(N45);
              break;
              case 'G46':
              audio = new Audio(G46);
              break;
              case 'G47':
              audio = new Audio(G47);
              break;
              case 'G48':
              audio = new Audio(G48);
              break;
              case 'G49':
              audio = new Audio(G49);
              break;
              case 'G50':
              audio = new Audio(G50);
              break;
              case 'G51':
              audio = new Audio(G51);
              break;
              case 'G52':
              audio = new Audio(G52);
              break;
              case 'G53':
              audio = new Audio(G53);
              break;
              case 'G54':
              audio = new Audio(G54);
              break;
              case 'G55':
              audio = new Audio(G55);
              break;
              case 'G56':
              audio = new Audio(G56);
              break;
              case 'G57':
              audio = new Audio(G57);
              break;
              case 'G58':
              audio = new Audio(G58);
              break;
              case 'G59':
              audio = new Audio(G59);
              break;
              case 'G60':
              audio = new Audio(G60);
              break;
              case 'O61':
              audio = new Audio(O61);
              break;
              case 'O62':
              audio = new Audio(O62);
              break;
              case 'O63':
              audio = new Audio(O63);
              break;
              case 'O64':
              audio = new Audio(O64);
              break;
              case 'O65':
              audio = new Audio(O65);
              break;
              case 'O66':
              audio = new Audio(O66);
              break;
              case 'O67':
              audio = new Audio(O67);
              break;
              case 'O68':
              audio = new Audio(O68);
              break;
              case 'O69':
              audio = new Audio(O69);
              break;
              case 'O70':
              audio = new Audio(O70);
              break;
              case 'O71':
              audio = new Audio(O71);
              break;
              case 'O72':
              audio = new Audio(O72);
              break;
              case 'O73':
              audio = new Audio(O73);
              break;
              case 'O74':
              audio = new Audio(O74);
              break;
              case 'O75':
              audio = new Audio(O75);
              break;
      default:
        // Handle cases where no audio needs to be played
        break;
    }

    if (audio) {
      audio.play();
  
      // Pause the audio after 3 seconds
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset audio to the beginning
      }, 3000); // Duration of 3 seconds
    }
  };

  const allPossibilities = [
    ...generatePossibilities('B', 1, 15),
    ...generatePossibilities('I', 16, 30),
    ...generatePossibilities('N', 31, 45),
    ...generatePossibilities('G', 46, 60),
    ...generatePossibilities('O', 61, 75)
  ];

  function generatePossibilities(letter, start, end) {
    const possibilities = [];
    for (let i = start; i <= end; i++) {
      possibilities.push(`${letter}${i}`);
    }
    return possibilities;
  }

  const rows = {
    B: allPossibilities.slice(0, 15),
    I: allPossibilities.slice(15, 30),
    N: allPossibilities.slice(30, 45),
    G: allPossibilities.slice(45, 60),
    O: allPossibilities.slice(60, 75),
  };

  // Get the five most recent called numbers
  const recentCalledNumbers = Array.from(calledNumbers).slice(-5);



  return (
    <div className={styles.bingocall}>
      <div className={styles.currentrecent}>
        <div className={styles.current11}>
          <div className={`${styles.current} ${animateCurrent ? styles.animated : ''}`}>
            <h3>{currentNumber}</h3>
          </div>
        </div>
      
      <div className={styles.img}>
        <img src={Bingocard} alt="Well Bingo"/>
      </div>
      {/* Display the five most recently called numbers */}
      <div className={styles.recentCalledNumbers}>
  <h4>Recent 5 Numbers:</h4>
  <ul >
    {recentCalledNumbers.reverse().map((number) => (
      <li key={number} className={styles.recentNumber}>
        
        {number.startsWith('free') ? <MdOutlineStarRate size={'3rem'}/> : number} {/* Remove "free" if it exists */}
      </li>
    ))}
  </ul>
</div>
      <div className={styles.derash}>
        <div className={styles.de}>ደራሽ</div>
        <div>{totalAmount}</div>
        <div>ብር</div>
      </div>
      </div>
      

      <div className={styles.bingoBoardcontainer}>
        <div className={styles.bingoBoard}>
          {Object.entries(rows).map(([letter, numbers]) => (
            <div key={letter} className={styles.bingoRow}>
               <h4 className={`${styles.letter} ${styles[letter]}`}>{letter}</h4>
              <ul className={styles.ul}>
                {numbers.map((number) => {
                  const numWithoutLetter = number.slice(1); // Remove the first character (letter)
                  return (
                    <li key={number} className={calledNumbers.has(number) ? (number === currentNumber ? `${styles.called} ${styles.animated}` : styles.called) : styles.uncalled}>
  {numWithoutLetter}
</li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};