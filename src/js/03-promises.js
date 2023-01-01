import Notiflix from 'notiflix';

const myForm = document.querySelector('.form');
myForm.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount }
  } = event.currentTarget;

  const d = Number(delay.value);
  const s = Number(step.value);
  const a = Number(amount.value);
    
  for (let i = 1; i <= a; i++) {
    let promiseArgs = {};
    promiseArgs.position = i;
    if (promiseArgs.position === 1) {
      promiseArgs.delay = d;
    }
    else { promiseArgs.delay = d + s * (i - 1); };
   
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


