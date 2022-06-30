import {

  minutes,
  minutesDisplay,
  secondsDisplay, 
  

} from './index.js'




// click controls timer


function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  
  
  function timerMinutes () {
  
  stopTimer = setTimeout (function () {
  
    let seconds = Number (secondsDisplay.textContent)
    let minutes = Number (minutesDisplay.textContent)
  
    updateTimerDisplay(minutes, 0)
  
    if (minutes <= 0 ) {
      return
    }
   
    if (seconds <= 0) {
      seconds = 59
      --minutes
  
  
    }
  
    updateTimerDisplay(minutes, String(seconds - 1))
  
    timerMinutes ()
  
    
  }, 1000)
  
  
  
  }
  
  function upadateMinutes (newMinutes) {
    minutes =  newMinutes 
  
  }
  
  function addMinutes () {
  
  upadateMinutes(minutesDisplay.textContent = Number (minutesDisplay.textContent) + 5)
  updateTimerDisplay(minutes, 0)
  
  
  
  
  }
  
  
  function decreaseTimer (){
  
  
  let minutes = Number (minutesDisplay.textContent)
  
  
  if ( minutes > 5 ) {
  
    upadateMinutes(minutesDisplay.textContent = Number (minutesDisplay.textContent) - 5)
    updateTimerDisplay(minutes, 0)
    
  
  } else {
  
    alert (' Não é possível diminuir o cronômetro para números negativos! Tente acrescentar mais minutos!')
    
  }
  
  }
  
  
  
export {

  updateTimerDisplay,
  timerMinutes,
  addMinutes,
  decreaseTimer

}