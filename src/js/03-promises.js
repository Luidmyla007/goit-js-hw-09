import Notiflix from 'notiflix';

const myForm = document.querySelector('.form');
const myInput = document.querySelectorAll('input');
const delay = myInput[0].name;
console.log(delay);
// let timerId = Number();
myForm.addEventListener("submit", createPromise);



function createPromise(position, delay) {
   
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}




// const btnSubmit = document.querySelector('button');
// console.log(btnSubmit);
// const inputDelay = document.querySelector('input');
// console.log(inputDelay);
// // const inputStep = document.querySelector();
// console.log(inputDelay);







// import Notiflix from 'notiflix';
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
