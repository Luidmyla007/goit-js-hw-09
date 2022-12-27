import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const dateSelect = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button[data-start]');

btnStart.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(dateSelect, options);
// console.log(new Date());