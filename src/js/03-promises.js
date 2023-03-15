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
  
  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
  const promises = [];
  
  for (let i = 0; i < amount; i++) {
  const position = i + 1;
  const promise = createPromise(position, delay + step * i);
  promises.push(promise);
  }
  
  Promise.all(promises)
  .then((results) => {
  console.log('All promises fulfilled:', results);
  })
  .catch((error) => {
  console.log('At least one promise rejected:', error);
  });
  });
