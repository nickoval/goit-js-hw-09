import Notiflix from 'notiflix';

const refs = {
  // delay : document.querySelector('[name="delay"]'),
  // step : document.querySelector('[name="step"]'),
  // amount : document.querySelector('[name="amount"]'),
  form : document.querySelector('.form')
}

// refs.delay.addEventListener('', ()=>{} );
// refs.step.addEventListener('', ()=>{} );
// refs.amount.addEventListener('', ()=>{} );

// refs.form.addEventListener('submit', (evt)=>{
//   evt.preventDefault();
//   const delay = evt.currentTarget.elements.delay.value;
//   console.log('delay: ',delay);
//   const step = evt.currentTarget.elements.step.value;
//   console.log('step: ',step);
//   const amount = evt.currentTarget.elements.amount.value;
//   console.log('amount: ',amount);
// } );

refs.form.addEventListener('submit', onSubmit );

function onSubmit(evt) {
  evt.preventDefault();
  const startDelay = Number(evt.currentTarget.elements.delay.value);
  console.log('delay: ',startDelay);
  const step = Number(evt.currentTarget.elements.step.value);
  console.log('step: ',step);
  const amount = Number(evt.currentTarget.elements.amount.value);
  console.log('amount: ',amount);

  for (let i = 0; i < amount; i++) {
    const delay = startDelay + i*step

    // runPromise(i, delay);
    // initPromise(i, delay);


    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          onFulfill();
  
        } else {
          onReject();
        }
      }, delay);
    });

    promise.then(
      // onResolve will run third or not at all
      value => {
        onFulfill(position, delay)
      },
      // onReject will run third or not at all
      error => {
        onReject(position, delay)
      }
    );
    
  }
}
console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

// function runPromise(position, delay) {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         onFulfill();

//       } else {
//         onReject();
//       }
//     }, delay);
//   });
//   return promise;
// }


  // promise.then(
  //   // onResolve will run third or not at all
  //   value => {
  //     onFulfill(position, delay)
  //   },
  //   // onReject will run third or not at all
  //   error => {
  //     onReject(position, delay)
  //   }
  // );

// initPromise(onFulfill, onReject);

function onFulfill(position, delay) {        Notiflix.Notify.success(
  `✅ Fulfilled promise ${position} in ${delay}ms`
);
console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  
}

function onReject(position, delay) {
  Notiflix.Notify.failure(
    `❌ Rejected promise ${position} in ${delay}ms`
  );
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}

// function runPromise(position, delay) {
//   console.log('position: ', position);
//   console.log('delay: ',delay);
//   // return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${position} in ${delay}ms`
//         );
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${position} in ${delay}ms`
//         );
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     }, delay);
//   // });
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


