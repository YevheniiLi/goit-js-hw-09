import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";


const refs = {
    time: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('button[data-start]'),
    daysCount: document.querySelector('[data-days]'),
    hoursCount: document.querySelector('[data-hours]'),
    minutesCount: document.querySelector('[data-minutes]'),
    secondsCount: document.querySelector('[data-seconds]'),
};

let delta = null;
let userDate = null;
let timerId = null;




// Выбор даты

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if(selectedDates[0] < Date.now()) {
        window.alert('Please choose a date in the future');
    } else {
        refs.startButton.style.disabled = true;
        refs.startButton.style.color = '#000000';
        userDate = selectedDates[0];
     }
    },
  };
        refs.startButton.style.color = '#666666';
        refs.startButton.style.disabled = false;
  
  flatpickr(refs.time,options);
  
        refs.startButton.addEventListener('click', onStart);


//   Отсчет времени

function onStart (evt) {
    evt.preventDefault();

    timerId = setInterval (() =>{
        delta = userDate - Date.now();
        if(delta<0) {
            clearInterval(timerId);
            return;
        }
        addTextContent(delta);
        
    },1000) 
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

// Форматирование времени

  function addLeadingZero(value) {
    return String(value). padStart(2, '0');
  };

  function addTextContent(deltaTime){
    refs.daysCount.textContent = addLeadingZero(convertMs(deltaTime).days);
    refs.hoursCount.textContent = addLeadingZero(convertMs(deltaTime).hours);
    refs.minutesCount.textContent = addLeadingZero(convertMs(deltaTime).minutes);
    refs.secondsCount.textContent = addLeadingZero(convertMs(deltaTime).seconds);
};