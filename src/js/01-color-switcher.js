const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
const TIME_INTERVAL = 1000;

// Чуть-чуть красоты для кнопок
refs.btnStart.classList.add('active');
refs.btnStop.classList.add('active');

// Только глобальные переменные и функции
// ------------------------------------------------------------------------------------------
// let timerID = null;
// let isWorking = false;

// refs.buttonStart.addEventListener('click', onStart);
// refs.buttonStop.addEventListener('click', onStop);

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function onStart() {
//   if (isWorking) {
//     return;
//   }
//   console.log('Start!!!');
//   isWorking = true;
//   timerID = setInterval(() => {
//     let bodyColor = getRandomHexColor();
//     console.log('bodyColor: ', bodyColor);
//     refs.body.style.backgroundColor = bodyColor;
//   }, TIME_INTERVAL);
// }

// function onStop() {
//   console.log('Stop!!!');
//   isWorking = false;
//   clearInterval(timerID);
// }
// =======================================================================================

// С использованием Объекта
// ---------------------------------------------------------------------------------------
// const switcher = {
//   timerID: null,
//   isWorking: false,

//   onStart() {
//     if (this.isWorking) {
//       return;
//     }
//     console.log('Start!!!');
//     this.isWorking = true;
//     this.timerID = setInterval(() => {
//       let color = getRandomHexColor();
//       console.log('bodyColor: ', color);
//       updateBodyStyle(color);
//     }, TIME_INTERVAL);
//     console.log('this.timerID: ', this.timerID);
//   },

//   onStop() {
//     console.log('Stop!!!');
//     console.log('this.timerID: ', this.timerID);
//     clearInterval(this.timerID);
//     this.isWorking = false;
//   },
// };

// function updateBodyStyle(bodyColor) {
//   refs.body.style.backgroundColor = bodyColor;
// }

// // или
// refs.btnStart.addEventListener('click', () => {
//   switcher.onStart();
// });
// refs.btnStop.addEventListener('click', () => {
//   switcher.onStop();
// });
// // или
// // refs.btnStart.addEventListener('click', switcher.onStart.bind(this));
// // refs.btnStop.addEventListener('click', switcher.onStop.bind(this));

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// ===================================================================================

// С использованием Класса (ООП)
// ---------------------------------------------------------------------------------------
// class Switcher {
//   constructor() {
//     this.timerID = null;
//     this.isWorking = false;
//     // this.onStep() = updateBodyStyle();
//   }

//   onStart() {
//     if (this.isWorking) {
//       return;
//     }
//     console.log('Start!!!');
//     this.isWorking = true;
//     this.timerID = setInterval(() => {
//       let color = this.getRandomHexColor();
//       console.log('bodyColor: ', color);
//       updateBodyStyle(color);
//     }, TIME_INTERVAL);
//     console.log('this.timerID: ', this.timerID);
//   }

//   onStop() {
//     console.log('Stop!!!');
//     console.log('this.timerID: ', this.timerID);
//     clearInterval(this.timerID);
//     this.isWorking = false;
//   }

//   getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
// }

// const switcher = new Switcher();

// refs.btnStart.addEventListener('click', switcher.onStart.bind(switcher));
// refs.btnStop.addEventListener('click', switcher.onStop.bind(switcher));

// function updateBodyStyle(bodyColor) {
//   refs.body.style.backgroundColor = bodyColor;
// }
// ===================================================================================

// Kласс независящий от имен внешних функций (как у Репеты)
//-----------------------------------------------------------------------------------
class Switcher {
  constructor({ onTick }) {
    this.timerID = null;
    this.isWorking = false;
    this.onTick = onTick;
  }

  onStart() {
    if (this.isWorking) {
      return;
    }
    console.log('Start!!!');
    this.isWorking = true;
    this.timerID = setInterval(() => {
      let color = this.getRandomHexColor();
      console.log('bodyColor: ', color);
      this.onTick(color);
    }, TIME_INTERVAL);
    console.log('this.timerID: ', this.timerID);
  }

  onStop() {
    console.log('Stop!!!');
    console.log('this.timerID: ', this.timerID);
    clearInterval(this.timerID);
    this.isWorking = false;
  }

  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}

const switcher = new Switcher({ onTick: updateBodyStyle });

refs.btnStart.addEventListener('click', switcher.onStart.bind(switcher));
refs.btnStop.addEventListener('click', switcher.onStop.bind(switcher));

function updateBodyStyle(bodyColor) {
  refs.body.style.backgroundColor = bodyColor;
}
