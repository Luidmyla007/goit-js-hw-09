import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const dateSelect = document.querySelector('#datetime-picker');
console.log(dateSelect);
const btnStart = document.querySelector('button[data-start]');
const timerDays = document.querySelector('.value[data-days]');
const timerHours = document.querySelector('.value[data-hours]');
const timerMinutes = document.querySelector('.value[data-minutes]');
const timerSeconds = document.querySelector('.value[data-seconds]');


btnStart.setAttribute('disabled', true);
const date = new Date();

let timerId = null;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  timerDays.textContent = days;
  timerHours.textContent = hours;
  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;

  if (!Number(days) & !Number(hours) & !Number(minutes) & !Number(seconds)) {
    clearInterval(timerId);   
    location.reload();
  }
  
   return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  // метод onClose
  onClose(selectedDates) {
    const selectDate = selectedDates[0];
    // если дата из прошлого выводим предупрежд
      if (date.getTime() >= Number(selectDate.getTime())) {
        Notiflix.Notify.failure('Please choose a date in the future');  
        return
    };
    // если дата из будущего - кнопка старт становится активной
        btnStart.removeAttribute('disabled');
    // и на нее можно кликнуть
    btnStart.addEventListener("click", () => {
          // при клике запустится обратн таймер
        timerId = setInterval(() => {
        const date = new Date();
        let ms = Number(selectDate.getTime()) - date.getTime();
          convertMs(ms);  
          console.log(ms);
        }, 1000);  
     
    });   
     
  },  

};


flatpickr(dateSelect, options);





