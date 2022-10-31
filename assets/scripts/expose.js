// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  const jsConfetti = new JSConfetti();
let selectHorn = document.getElementById("horn-select");
selectHorn.addEventListener('change', change1);
let audioFile = document.querySelector("#expose audio")
let playSound = document.querySelector("button");
  
let volumes= document.getElementById('volume')
volumes.addEventListener('input', volChange)
playSound.addEventListener('click', play)
function change1() {
  if (selectHorn.value=='air-horn') {
    document.getElementsByTagName("img")[0].src = "assets/images/air-horn.svg";  
    audioFile.src= "assets/audio/air-horn.mp3"
  }
  if (selectHorn.value=='car-horn') {
    document.getElementsByTagName("img")[0].src = "assets/images/car-horn.svg"; 
    audioFile.src= "assets/audio/car-horn.mp3"
  }
  if (selectHorn.value=='party-horn') {
    document.getElementsByTagName("img")[0].src = "assets/images/party-horn.svg";   
    audioFile.src= "assets/audio/party-horn.mp3"
   }
  } 
  function volChange() {
  let volumeImg = document.querySelector("#volume-controls>img")
  let volumeLevel = -100
  if (volumes.value == 0) {
      volumeLevel = 0
    }
  if(volumes.value>0 && volumes.value < 33) {
      volumeLevel = 1
    }
  if (volumes.value>33 && volumes.value < 67) {
      volumeLevel = 2
    }
  if (volumes.value >=67)  {
      volumeLevel = 3
  }
  volumeImg.src = "assets/icons/volume-level-" + volumeLevel + ".svg"  
  }
  function play() {
    if (selectHorn.value == "party-horn") {
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
     
    }
    
    audioFile.volume= volumes.value/100
    audioFile.play()
  }
  
}


