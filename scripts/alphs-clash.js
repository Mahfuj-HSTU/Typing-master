// function play() {
//   // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//   const homeSection = document.getElementById('home-screen');
//   // console.log(homeSection);
//   homeSection.classList.add('hidden');

//   // step-2: show the home screen
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event) {
  const pressedButton = event.key;
  // console.log('btnPress', pressedButton);

  // ~ close the game
  if (pressedButton === 'Escape') {
    gameOver();
  }

  // get the expected key to press
  // *without function
  //! const currentAlphabetElement = document.getElementById('current-alphabet');
  //! const currentAlphabet = currentAlphabetElement.innerText;
  // console.log(pressedButton, currentAlphabet);
  // *with function
  const currentAlphabet = getElementTextById('current-alphabet');

  // check matched or not
  if (pressedButton === currentAlphabet) {
    // console.log('you got a point');
    // 1. update the score
    // 2. get previous score and update it
    // *without function get element and set element
    //! const currentScoreElement = document.getElementById('current-score');
    //! const currentScore = parseInt(currentScoreElement.innerText);
    //! const newScore = currentScore + 1;
    //! currentScoreElement.innerText = newScore;

    // *using function get element and set element
    const currentScore = getTextElementValueById('current-score');
    const newScore = currentScore + 1;
    setTextElementValueById('current-score', newScore);

    // start new round
    removeBgColorById(currentAlphabet);
    playingGame();
  } else {
    // *without function get element and set element
    //! const currentLifeElement = document.getElementById('current-life');
    //! const currentLife = parseInt(currentLifeElement.innerText);
    //! const newLife = currentLife - 1;
    //! currentLifeElement.innerText = newLife;

    // *using function get element and set element
    const currentLife = getTextElementValueById('current-life');
    const newLife = currentLife - 1;
    setTextElementValueById('current-life', newLife);

    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function playingGame() {
  // step-1:generate a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log(alphabet);

  // set randomly generated alphabet to the screen
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet;

  // set background color
  setBgColorById(alphabet);
}

function play() {
  hideElementById('home-screen');
  hideElementById('final-score');
  showElementById('play-ground');
  // reset score and life
  setTextElementValueById('current-life', 5);
  setTextElementValueById('current-score', 0);
  playingGame();
}

function gameOver() {
  hideElementById('play-ground');
  showElementById('final-score');
  // update final score
  // 1. get the final score
  const lastScore = getTextElementValueById('current-score');
  // console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // clear the last selected alphabet bg color
  const alphabet = getElementTextById('current-alphabet');
  // console.log(alphabet);
  removeBgColorById(alphabet);
}
