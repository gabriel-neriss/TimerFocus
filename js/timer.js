import { minutesDisplay, secondsDisplay, audioAlert } from './index.js'

let stopTimer



// click controls timer


function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
  } 
  
function timerMinutes () {
  
  stopTimer = setTimeout (function () {
  
    let seconds = Number (secondsDisplay.textContent)
    let minutes = Number (minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    

    if (isFinished) {
      
      updateTimerDisplay(minutes, 0)
      timerEnd()
      
      return

    } 

   
    if (seconds <= 0) {
      seconds = 60
      --minutes
  
  
    }
  
    updateTimerDisplay(minutes, String(seconds - 1))
   
  
    timerMinutes ()
  
    
  }, 1000)
  
  
  
  }
  
function timerEnd () {

  audioAlert.play()

}
  
function addMinutes () {
  
  updateTimerDisplay(minutesDisplay.textContent = Number (minutesDisplay.textContent) + 5, 0)
  
  
  }
  
  
  function decreaseTimer () {
  
  
  let minutes = Number (minutesDisplay.textContent)
  
  
  if ( minutes > 5 ) {
  
    updateTimerDisplay(minutesDisplay.textContent = Number (minutesDisplay.textContent) - 5, 0)
    
    
  
  } else {
  
    alert (' Não é possível diminuir o cronômetro para números negativos! Tente acrescentar mais minutos!')
    
  }
  
  }
  
  
  
export {

  stopTimer,
  updateTimerDisplay,
  timerMinutes,
  addMinutes,
  decreaseTimer,
  timerEnd

}