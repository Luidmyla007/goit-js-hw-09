const chameleonBody = document.querySelector("body");
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
  let newColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  chameleonBody.style.backgroundColor = newColor;
};

btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    getRandomHexColor();
   }, 1000);    
});

btnStop.addEventListener("click", () => {
    clearInterval(timerId); 
});

