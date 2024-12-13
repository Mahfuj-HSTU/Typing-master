function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}

function setBgColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-500');
}
function removeBgColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-500');
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const value = parseInt(element.innerText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getARandomAlphabet() {
  // get or create an alphabet array
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
  const randomIndex = Math.floor(Math.random() * alphabetString.length);
  const alphabets = alphabetString.split('');
  // console.log(alphabets);
  // console.log(randomIndex);
  return alphabets[randomIndex];
  // console.log(alphabets[randomIndex]);
}
