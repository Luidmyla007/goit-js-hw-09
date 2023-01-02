import Notiflix from 'notiflix';

const myForm = document.querySelector('.form');
myForm.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  const numDelay = Number(delay.value);
  const numStep = Number(step.value);
  const numAmount = Number(amount.value);
    
  for (let i = 1; i <= numAmount; i++) {
    let promiseArgs = {};
    promiseArgs.position = i;
    if (promiseArgs.position === 1) {
      promiseArgs.delay = numDelay;
    }
    else { promiseArgs.delay = numDelay + numStep * (i - 1); };
   
    createPromise(promiseArgs);
   
    event.currentTarget.reset();
  };
}

  function createPromise({ position, delay } ) {
  const shouldResolve = Math.random() > 0.3;
    
  setTimeout(() => {
      const promise = new Promise((resolve, reject) => {
        
    if (shouldResolve) {
     resolve({ position, delay });
    } else {
     reject({ position, delay });
    }
  });
 
  
   return promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }, delay);
}


