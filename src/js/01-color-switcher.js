const chameleonBody = document.querySelector("body");
const BtnStart = document.querySelector('button[data-start]');
const BtnStop = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
  let newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  chameleonBody.style.backgroundColor = newColor;
};

BtnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    getRandomHexColor();
   }, 1000);    
});

BtnStop.addEventListener("click", () => {
    clearInterval(timerId); 
});

