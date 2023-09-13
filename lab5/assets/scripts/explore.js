// explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("select");
let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
  let i = 0;

  for (const element of voices) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${element.name} (${element.lang})`;
    voiceSelect.appendChild(option);

    i++;
  }
}

function init() {
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoiceList;
  }
  
  const button = document.querySelector('button');
  const text = document.querySelector('textarea');
  const img = document.querySelector('img');

  button.addEventListener('click', (e) => {
    const utterThis = new SpeechSynthesisUtterance(text.value);
    utterThis.voice = voices[voiceSelect.value];
    synth.speak(utterThis);
    
    img.src = 'assets/images/smiling-open.png';

    utterThis.addEventListener('end', (e) => {
      img.src = 'assets/images/smiling.png';
    })
  });
}