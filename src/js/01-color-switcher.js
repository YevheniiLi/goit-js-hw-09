const refs ={
    startButton : document.querySelector('button[data-start]'),
    stopButton : document.querySelector('button[data-stop]'),
    body : document.querySelector('body')
};

let timerId = null;


refs.startButton.addEventListener('click', onPutStart);
refs.stopButton.addEventListener('click', onPutStop);


function onPutStart(evt) {
    evt.preventDefault();
    refs.startButton.style.disabled = false;
    refs.startButton.style.color = '#666666';

    timerId = setInterval(() => {
    const changeColor = getRandomHexColor();
    refs.body.style.background = changeColor;   
    }, 1000);

};

function onPutStop(evt){
    evt.preventDefault();
    clearInterval(timerId);

    refs.startButton.style.disabled = true;
    refs.startButton.style.color = '#000000';

};
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      }