
const App = () => {
    //TODO
    let tens = 00;
    let seconds = 00;
    let minutes = 00;
    let hours = 00;
    let appendTens = document.getElementById('tens')
    let appendSeconds = document.getElementById('seconds')
    let appendMinutes = document.getElementById('minutes')
    let appendHours = document.getElementById('hours')
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    
    let Interval ;

    

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    })
      
        

    

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    }) 
       
    

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
         tens = "00";
            seconds = "00";
             minutes = "00";
                 hours = "00";

         appendTens.innerHTML = tens;
             appendSeconds.innerHTML = seconds;
                    appendMinutes.innerHTML = minutes;
                        appendHours.innerHTML = hours;
    })
        
                
                
    

    function startTimer() {
        tens++;
        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }
        
        if (tens > 9) {
            appendTens.innerHTML = tens; 
            
        }
        
        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
       
            
        }
        
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
       
        if(seconds > 59) {
            appendSeconds.innerHTML = seconds = 00 + "0";
            console.log("minutes"); 
            minutes++;
            appendMinutes.innerHTML = "0" + minutes;
            seconds = 0;
        }
         
            
        
        
        if (minutes > 9) {
            appendMinutes.innerHTML =  minutes;
        }

        if (minutes > 59) {
            appendMinutes.innerHTML = minutes = 00 + "0";
            console.log("hours");
            hours++;
            appendHours.innerHTML = "0" + hours;
            minutes = 0;
        }
      if (hours > 9) {
          appendHours.innerHTML = hours;
      }

        
    }
  
}
App();
