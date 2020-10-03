// add listeners
window.addEventListener("keydown", playAudio);
window.addEventListener("keyup", endSound);

// play sound fun
function playAudio(event) {
  // declare selectors
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

// fun to remove class after sound end
function endSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
}
