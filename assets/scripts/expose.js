// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');
  const audioElement = document.querySelector('audio');
  
  const jsConfetti = new JSConfetti();
  
  hornSelect.addEventListener('change', updateHorn);
  volumeSlider.addEventListener('input', updateVolume);
  playButton.addEventListener('click', playSound);
  
  function updateHorn() {
    const selectedHorn = hornSelect.value;
    
    //update image and audio source based on selection
    if (selectedHorn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      audioElement.src = 'assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      audioElement.src = 'assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      audioElement.src = 'assets/audio/party-horn.mp3';
    }
  }
  
  function updateVolume() {
    const volume = volumeSlider.value;
    
    //set volume
    audioElement.volume = volume / 100;
    
    //change icon
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  }
  
  function playSound() {
    audioElement.play();
  
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  }
  
  //set initial volume based on slider value
  updateVolume();
}
