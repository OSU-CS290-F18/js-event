window.addEventListener('click', function (event) {
  console.log("== The window was clicked.");
  console.log("  - event.target:", event.target);
});

function handleButtonClick(event) {
  console.log("== The button was clicked.");
  // window.location.href = "http://google.com";
  console.log("  - event.target:", event.target);
}

var firstButton = document.querySelector('.in-box-button');
// firstButton.addEventListener('click', handleButtonClick);
var allButtons = document.querySelectorAll('.in-box-button');
for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener('click', handleButtonClick);
}

// firstButton.removeEventListener('click', handleButtonClick);
// firstButton.onclick = handleButtonClick;

var firstBox = document.querySelector('div.box');
firstBox.addEventListener('click', function (event) {
  console.log("== The first box was clicked.");
  console.log("  - event.target:", event.target);
  console.log("  - event.currentTarget:", event.currentTarget);
  event.stopPropagation();
});
