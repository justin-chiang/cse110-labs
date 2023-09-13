// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const hornAudio = document.querySelector('audio');

  hornSelect.addEventListener('change', (e) => {
    hornImage.src = `assets/images/${e.target.value}.svg`;
    hornAudio.src = `assets/audio/${e.target.value}.mp3`;
  });

  const volumeSlider = document.getElementById('volume');
  const volumeImage = document.querySelector('img[alt="Volume level 2"]');

  volumeSlider.addEventListener('change', (e) => {
    if (e.target.value == 0) {
      volumeImage.src = `assets/icons/volume-level-0.svg`;
    }
    else if ((e.target.value >= 1) && (e.target.value < 33)) {
      volumeImage.src = `assets/icons/volume-level-1.svg`;
    }
    else if ((e.target.value >= 33) && (e.target.value < 67)) {
      volumeImage.src = `assets/icons/volume-level-2.svg`;
    }
    else if ((e.target.value >= 67) && (e.target.value <= 100)) {
      volumeImage.src = `assets/icons/volume-level-3.svg`;
    }
  });

  const playSound = document.querySelector('button');

  playSound.addEventListener('click', (e) => {
    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }

    hornAudio.volume = parseFloat(volumeSlider.value/100);
    hornAudio.play();
  });
}