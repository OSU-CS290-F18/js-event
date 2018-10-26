var allWords = [];
var currentWord = 0;

function handleNewWordsEntered(event) {
  var userInput = event.target.value;
  allWords = userInput.replace(/[!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~]/g, '').toLowerCase().split(' ');
  console.log("== New words were entered:", allWords);
}

var wordsInputElement = document.getElementById('words-input');
// wordsInputElement.addEventListener('input', handleNewWordsEntered);
wordsInputElement.addEventListener('change', handleNewWordsEntered);
