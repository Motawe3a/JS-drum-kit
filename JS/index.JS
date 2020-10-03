window.addEventListener('keydown', playAudio);
// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeClass))

function playAudio(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
// function removeClass(event) {
//   console.log(event);
//   if (event.propertyName !== 'transform') {
//     return;
//   }
//   this.classList.remove('playing')
// }

function endSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove('playing');
}

window.addEventListener('keyup', endSound);