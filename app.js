function playSound(e) {
    const keyDiv = document.querySelector(`.key[data-key="${e.code}"]`);
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    keyDiv?.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);
