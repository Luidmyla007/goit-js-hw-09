import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateSelect = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

btnStart.setAttribute('disabled', true);
const date = new Date();

// let ms = Number(selectDate.getTime()) - date.getTime();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

let timerId = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  // minDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectDate = selectedDates[0];
      if (date.getTime() >= Number(selectDate.getTime())) {
        Notiflix.Notify.failure('Please choose a date in the future');  
        return
        };
     btnStart.removeAttribute('disabled');
    let ms = Number(selectDate.getTime()) - date.getTime();

   btnStart.addEventListener("click", () => {
  timerId = setInterval(() => {
    convertMs(ms);
   }, 1000);    
});
   
   
  },
 
};

flatpickr(dateSelect, options);
// console.dir(new Date());
// console.log(new Date().getMilliseconds.length);