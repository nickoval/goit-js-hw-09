import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio'; //Для Бровко

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const TIME_STEP = 1000;

// Только глобальные переменные и функции
// ------------------------------------------------------------------------------------------
// let deltaTime = 0;
// let timerID = null;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     if (selectedDates[0] <= options.defaultDate) {
//       Notiflix.Notify.failure(
//         'You are not Marty McFlay! Please choose a date in the future'
//       );
//       return;
//     }

//     deltaTime = selectedDates[0] - options.defaultDate;
//     onTimerStop();
//     onDateSet();
//     refs.btnStart.classList.add('active');
//   },
// };

// flatpickr(refs.input, options);

// function onDateSet() {
//   refs.btnStart.addEventListener('click', onTimerWork);
// }

// function onTimerWork() {
//   // console.log('Start!!!');
//   onShowTime(0);

//   timerID = setInterval(() => {
//     if (deltaTime < TIME_STEP) {
//       return;
//     }
//     refs.btnStart.classList.remove('active');
//     refs.btnStart.removeEventListener('click', onTimerWork);
//     deltaTime -= TIME_STEP;
//     onShowTime(deltaTime);
//   }, TIME_STEP);
// }

// function onTimerStop() {
//   clearInterval(timerID);
// }

// function onShowTime(time) {
//   const { days, hours, minutes, seconds } = convertMs(time);
//   refs.days.textContent = addLeadingZero(days);
//   refs.hours.textContent = addLeadingZero(hours);
//   refs.minutes.textContent = addLeadingZero(minutes);
//   refs.seconds.textContent = addLeadingZero(seconds);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
// ===========================================================================

// Решение Бровко
// -------------------------------------------------------------------------------
let intervalId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    const time = selectedDates[0] - options.defaultDate;
    refs.btnStart.removeAttribute('disabled');

    refs.btnStart.onclick = function () {
      clearInterval(intervalId);
      timer(time);
      refs.btnStart.setAttribute('disabled', 'disabled');
    };
  },
};

flatpickr(refs.input, options);

function timer(time) {
  refs.btnStart.setAttribute('disabled', 'disabled');
  timerMarckup(convertMs(time));
  intervalId = setInterval(() => {
    time -= TIME_STEP;
    timerMarckup(convertMs(time));
  }, TIME_STEP);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timerMarckup(obj) {
  const { days, hours, minutes, seconds } = obj;
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

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
// ========================================================================================

// С использованием Класса (не снимается слушатель с кнопки)
// ---------------------------------------------------------------------------------------

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   // deltaTime: 0,

//   onClose(selectedDates) {
//     if (selectedDates[0] <= options.defaultDate) {
//       Notiflix.Notify.failure(
//         'You are not Marty McFlay! Please choose a date in the future'
//       );
//       return;
//     }

//     // deltaTime = selectedDates[0] - options.defaultDate;
//     // console.log('onClose ~ options.defaultDate', options.defaultDate);
//     // console.log('onClose ~ selectedDates[0]', selectedDates[0]);
//     timer.onTimerStop();
//     timer.onDateSet(selectedDates[0], options.defaultDate);
//     refs.btnStart.classList.add('active');
//   },
// };

// flatpickr(refs.input, options);

// class Timer {
//   constructor() {
//     this.timerID = null;
//     this.deltaTime = 0;
//   }

//   onDateSet(dateStart, dateStop) {
//     this.deltaTime = dateStart - dateStop;
//     // console.log('onDateSet ~ dateStart', dateStart);
//     // console.log('onDateSet ~ dateStop', dateStop);
//     refs.btnStart.addEventListener('click', timer.onTimerWork.bind(timer));
//   }

//   onTimerWork() {
//     // console.log('Start!!!');
//     onShowTime(0);
//     // console.log('this.deltaTime :', this.deltaTime);

//     this.timerID = setInterval(() => {
//       if (this.deltaTime < TIME_STEP) {
//         return;
//       }
//       console.log('this.timerID: ', this.timerID);
//       refs.btnStart.classList.remove('active');
//       refs.btnStart.removeEventListener('click', timer.onTimerWork.bind(timer));
//       this.deltaTime -= TIME_STEP;
//       // console.log('this.timerID=setInterval ~ this.deltaTime', this.deltaTime);
//       onShowTime(this.deltaTime);
//     }, TIME_STEP);
//   }

//   onTimerStop() {
//     clearInterval(this.timerID);
//   }
// }

// const timer = new Timer();

// function onShowTime(time) {
//   const { days, hours, minutes, seconds } = convertMs(time);
//   refs.days.textContent = addLeadingZero(days);
//   refs.hours.textContent = addLeadingZero(hours);
//   refs.minutes.textContent = addLeadingZero(minutes);
//   refs.seconds.textContent = addLeadingZero(seconds);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }

// С использованием Объекта timer (не снимается слушатель с кнопки)
// ---------------------------------------------------------------------------------------

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   // deltaTime: 0,

//   onClose(selectedDates) {
//     if (selectedDates[0] <= options.defaultDate) {
//       Notiflix.Notify.failure(
//         'You are not Marty McFlay! Please choose a date in the future'
//       );
//       return;
//     }

//     // deltaTime = selectedDates[0] - options.defaultDate;
//     // console.log('onClose ~ options.defaultDate', options.defaultDate);
//     // console.log('onClose ~ selectedDates[0]', selectedDates[0]);
//     timer.onTimerStop();
//     timer.onDateSet(selectedDates[0], options.defaultDate);
//     refs.btnStart.classList.add('active');
//   },
// };

// flatpickr(refs.input, options);

// const timer = {
//   timerID: null,
//   deltaTime: 0,

//   onDateSet(dateStart, dateStop) {
//     this.deltaTime = dateStart - dateStop;
//     // console.log('onDateSet ~ dateStart', dateStart);
//     // console.log('onDateSet ~ dateStop', dateStop);
//     refs.btnStart.addEventListener('click', timer.onTimerWork.bind(this));
//   },

//   onTimerWork() {
//     // console.log('Start!!!');
//     onShowTime(0);
//     // console.log('this.deltaTime :', this.deltaTime);

//     this.timerID = setInterval(() => {
//       if (this.deltaTime < TIME_STEP) {
//         return;
//       }
//       console.log('this.timerID: ', this.timerID);
//       refs.btnStart.classList.remove('active');
//       refs.btnStart.removeEventListener('click', timer.onTimerWork.bind(this));
//       this.deltaTime -= TIME_STEP;
//       // console.log('this.timerID=setInterval ~ this.deltaTime', this.deltaTime);
//       onShowTime(this.deltaTime);
//     }, TIME_STEP);
//   },

//   onTimerStop() {
//     clearInterval(this.timerID);
//   },
// };

// function onShowTime(time) {
//   const { days, hours, minutes, seconds } = convertMs(time);
//   refs.days.textContent = addLeadingZero(days);
//   refs.hours.textContent = addLeadingZero(hours);
//   refs.minutes.textContent = addLeadingZero(minutes);
//   refs.seconds.textContent = addLeadingZero(seconds);
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
