let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector('select');

// Function to populate voices array with all available voices
function populateVoices() {
  voices = window.speechSynthesis.getVoices();
  voiceselect.innerHTML = ""; // Clear existing options
  voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i)));
}

// Populate voices array initially and when voiceschanged event is fired
populateVoices();
window.speechSynthesis.onvoiceschanged = populateVoices;

// Event listener for changing voice
voiceselect.addEventListener("change", () => {
  speech.voice = voices[voiceselect.value];
});

// Event listener for button click or touch to speak text
document.querySelector("button").addEventListener('click', speakText);
document.querySelector("button").addEventListener('touchstart', speakText);

function speakText() {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
}
