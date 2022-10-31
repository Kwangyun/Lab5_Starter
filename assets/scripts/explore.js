// explore.js
  //보이스 선택을하고, text area에서 parsing한다음에 buttom 누르면 되게한다.
window.addEventListener('DOMContentLoaded', init);
function init() {
  const text = document.getElementById("text-to-speak");
  const selector = document.getElementById("voice-select");

  const img = document.querySelector("img");
  const button = document.querySelector('button')
  
  // let utterance = new SpeechSynthesisUtterance("Hello world!");
  // speechSynthesis.speak(utterance);
  
  populateVoiceList()
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  
  button.addEventListener('click', function () {
    let utterance = new SpeechSynthesisUtterance(text.value);
    speechSynthesis.speak(utterance);
    img.src = "assets/images/smiling-open.png"
    utterance.addEventListener("end", (event) => {
      img.src = "assets/images/smiling.png"
    })
    
  })
  

}


function isSpeaking() {
  if (speechSynthesis.speaking == False) {
    img.src= "assets/images/smiling.png"
  }
}

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }
  
  const voices = speechSynthesis.getVoices();
  console.log(voices)
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }

  
}
  




