function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  containerEl: document.querySelector('body'),
  buttonStartEl: document.querySelector('[data-start]'),
  buttonStopEl: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.buttonStartEl.addEventListener('click', startChangeBodyColor);

function startChangeBodyColor() {
  timerId = setInterval(() => {
    let colorBody = getRandomHexColor();
    refs.containerEl.style.backgroundColor = colorBody;
  }, 1000);

  refs.buttonStartEl.setAttribute('disabled','disabled');
  refs.buttonStopEl.removeAttribute('disabled');
}

refs.buttonStopEl.addEventListener('click', stopChangeBodyColor);

function stopChangeBodyColor() {
  clearInterval(timerId);
  refs.buttonStartEl.removeAttribute('disabled');
  refs.buttonStopEl.setAttribute('disabled','disabled');
}

refs.containerEl.style.margin = '50px';
refs.containerEl.style.textAlign = 'center';
