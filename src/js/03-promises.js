import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  delayCmd: document.querySelector('[name="delay"]'),
  stepCmd: document.querySelector('[name="step"]'),
  amountCmd: document.querySelector('[name="amount"]'),
  buttonCmd: document.querySelector('button'),
  
}



refs.form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  let delayUser = parseInt(refs.delayCmd.value);
  const amountUser = parseInt(refs.amountCmd.value);
  const stepUser = parseInt(refs.stepCmd.value);

  if(delayUser < 0 && amountUser < 0 && stepUser < 0) {
    return;
    }
    for(let position = 1; position <= amountUser; position += 1) {
      createPromise (position, delayUser)
        .then(value => {
          Notiflix.Notify.success(value);;
        })
        .catch(error => {
          Notiflix.Notify.warning(error);
        });
      delayUser +=stepUser;
  }

});

function createPromise(position, delay) {
  const updatePromise = Math.random() > 0.3;

    return new Promise((resolve, reject) =>{
      setTimeout(() => {
        if (updatePromise) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);          
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
    });
}
