// explore.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  //get DOM elements
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');
 
  //initialize speech synthesis
  const synth = window.speechSynthesis;
  let voices = [];
 
  //function to populate voice select dropdown
  function populateVoiceList() {
    voices = synth.getVoices();
   
    //clear existing options except the default
    while (voiceSelect.options.length > 1) {
      voiceSelect.remove(1);
    }
   
    //add all available voices
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }
 
  //initial population attempt
  populateVoiceList();
 
  //chrome needs this event to load voices
  synth.onvoiceschanged = function() {
    populateVoiceList();
  };
 
  //manual check for talking state
  let isTalking = false;
 
  //function to check speaking status repeatedly
  function checkSpeaking() {
    if (synth.speaking !== isTalking) {
      isTalking = synth.speaking;
      //update face image based on speaking status
      faceImage.src = isTalking ?
        'assets/images/smiling-open.png' :
        'assets/images/smiling.png';
    }
   
    //continue checking while speech synthesis is active
    requestAnimationFrame(checkSpeaking);
  }
 
  //start the continuous checking
  checkSpeaking();
 
  //function to speak the text
  function speak() {
    //cancel any current speech
    synth.cancel();
   
    const text = textArea.value.trim();
    if (text === '') {
      alert('Please enter some text to speak');
      return;
    }
   
    //create utterance with the text
    const utterance = new SpeechSynthesisUtterance(text);
   
    //set selected voice if one is chosen
    if (voiceSelect.selectedIndex > 0) {
      const selectedIndex = parseInt(voiceSelect.value);
      utterance.voice = voices[selectedIndex];
    }
   
    //start speaking
    synth.speak(utterance);
  }
 
  //add event listener to talk button
  talkButton.addEventListener('click', speak);
}