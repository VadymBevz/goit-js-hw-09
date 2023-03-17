import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('.form');
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  const shouldResolve = Math.random() > 0.3;
  const promiseParameters = {position, delay};
  if (shouldResolve) {
  resolve(promiseParameters);
  } else {
  reject(promiseParameters);
  }
  }, delay);
  });
  }
  
  
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = Number(event.currentTarget.elements.delay.value);
  const step = Number(event.currentTarget.elements.step.value);
  const amount = Number(event.currentTarget.elements.amount.value);
  
  
  for (let i = 0; i < amount; i++) {
    createPromise(i,delay)
  .then(({position, delay}) => 
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  
  )
  .catch(({position, delay}) => 
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  )
  delay += step
  }
  form.reset();
 });
