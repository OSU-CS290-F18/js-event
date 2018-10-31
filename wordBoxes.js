var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  var userInput = event.currentTarget.value;
  allWords = userInput.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase().split(' ');
  currentWord = 0;
  console.log("== New words were entered:", allWords);
}

var wordsInputElement = document.getElementById('words-input');
// wordsInputElement.addEventListener('input', handleNewWordsEntered);
wordsInputElement.addEventListener('change', handleNewWordsEntered);

function generateWordElement(word, color) {
  var wordElement = document.createElement('span');
  wordElement.classList.add('word');
  wordElement.textContent = word;
  if (color) {
    wordElement.classList.add('highlight');
    wordElement.classList.add(color);
  }

  return wordElement;
}

function getEveryNthValue() {
  var everyNthSelect = document.getElementById('every-nth-select');
  var everyNthValue = everyNthSelect.value;
  return parseInt(everyNthValue);
}

function getSelectedColor() {
  var selectedColorButton = document.querySelector('input[name="highlight-color"]:checked');
  return selectedColorButton.value;
}

function handleAddWordButtonClick(event) {
  var word = allWords[currentWord];
  if (word) {
    console.log("== currentWord:", word);

    var everyNthValue = getEveryNthValue();
    var highlight = ((currentWord + 1) % everyNthValue) === 0;
    if (highlight) {
      highlight = getSelectedColor();
    }

    var wordElement = generateWordElement(word, highlight);

    var container = event.currentTarget.parentNode.parentNode;
    var wordsContainer = container.querySelector('.words-container');
    wordsContainer.appendChild(wordElement);
    currentWord = (currentWord + 1) % allWords.length;
  }
}

var addWordButtons = document.getElementsByClassName('add-word-button');
for (var i = 0; i < addWordButtons.length; i++) {
  addWordButtons[i].addEventListener('click', handleAddWordButtonClick);
}

document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains('word')) {
    event.target.remove();
  }
});
