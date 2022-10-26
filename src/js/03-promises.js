import Notiflix from 'notiflix';

const refs = {
  // delay : document.querySelector('[name="delay"]'),
  // step : document.querySelector('[name="step"]'),
  // amount : document.querySelector('[name="amount"]'),
  form: document.querySelector('.form'),
};

// refs.form.addEventListener('submit', (evt)=>{
//   evt.preventDefault();
//   const delay = evt.currentTarget.elements.delay.value;
//   console.log('delay: ',delay);
//   const step = evt.currentTarget.elements.step.value;
//   console.log('step: ',step);
//   const amount = evt.currentTarget.elements.amount.value;
//   console.log('amount: ',amount);
// } );

refs.form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const startDelay = Number(evt.currentTarget.elements.delay.value);
  const step = Number(evt.currentTarget.elements.step.value);
  const amount = Number(evt.currentTarget.elements.amount.value);

  // Для варианта 1
  // for (let i = 0; i < amount; i++) {
  //   const delay = startDelay + i * step;
  //   runPromise(i, delay);
  // }

  // Для варианта 2
  // initPromise(startDelay, step, amount);

  // Для варианта 3
  promiseCounter(startDelay, step, amount);
}

// Работает без всяких промисов (вариант 1)
// --------------------------------------------------------------
// function runPromise(position, delay) {
//   console.log('position: ', position);
//   console.log('delay: ', delay);
//   setTimeout(() => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     } else {
//       Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     }
//   }, delay);
// }
// ==================================================================================

// Одна большая функция со сетчиком и промисом (вариант 2) (!!!Не передаются данные под вывод!!!)
// -----------------------------------------------------------------------------
// function initPromise(startDelay, step, amount) {
//   for (let i = 0; i < amount; i++) {
//     const delay = startDelay + i * step;

//     const promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const shouldResolve = Math.random() > 0.3;
//         if (shouldResolve) {
//           onFulfill();
//         } else {
//           onReject();
//         }
//       }, delay);
//     });

//     promise.then(
//       value => {
//         onFulfill(position, delay);
//       },
//       error => {
//         onReject(position, delay);
//       }
//     );
//   }
// }

// function onFulfill(position, delay) {
//   Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }

// function onReject(position, delay) {
//   Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
// }
// ====================================================================================

// Вариант 3 Немного похож на Репетовский (функции разделены, аргументы передаются из функции в функцию)
// -------------------------------------------------------------------------------------
function promiseCounter(startDelay, step, amount) {
  for (let i = 0; i < amount; i++) {
    let delay = startDelay + i * step;
    createPromise(i, delay).then(onFulfill).catch(onReject);
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFulfill({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onReject({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
// ====================================================================================
