const chameleonBody = document.querySelector("body");
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
  let newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  chameleonBody.style.backgroundColor = newColor;
};


btnStart.addEventListener('click', onStart);
btnStop.addEventListener('click', onStop);

function onStart() {
  btnStart.setAttribute('disabled', true);
  btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    getRandomHexColor();
  }, 1000); 
 
};

function onStop() {
  btnStop.setAttribute('disabled', true);
  btnStart.removeAttribute('disabled');
  clearInterval(timerId);
}







