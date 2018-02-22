const keys = document.querySelectorAll('.button');

function playSound(e){
  const audio = document.querySelector(`audio[data-button="${e.keyCode}"]`);
  const button = document.querySelector(`.button[data-button="${e.keyCode}"]`);
  if(!audio){
    return;
  }
  audio.currentTime = 0;
  button.classList.add('buttonPressed');
  audio.play();
}

function removeTransition(e){
  if(e.propertyName !== 'transform'){
    return;
  }
  this.classList.remove('buttonPressed');
}

window.addEventListener('keydown', playSound);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
