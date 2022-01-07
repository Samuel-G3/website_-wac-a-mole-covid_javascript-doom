const squares$$ = document.querySelectorAll(".square");
const mole$4 = document.querySelector(".mole");
const timeLeft$$ = document.querySelector("#time-left");
const score$$ = document.querySelector("#score");
const start$$ = document.querySelector('#start');
let result = 0;
let hitPosition; 
let timerMole = null;  
 
start$$.addEventListener('click', () =>{
  
   
  let currentTime = 25;
  

   

function randomSquare() {
  squares$$.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomMole = squares$$[Math.floor(Math.random() * 9)];
  randomMole.classList.add("mole");
  hitPosition = randomMole.id;
}

squares$$.forEach((square) => {
  square.addEventListener("click", (e) => {
    if (square.id == hitPosition) {
      result++;
      score$$.textContent = result
      hitPosition = null;
    }
  });
});

function moveMole() {
    
  timerMole = setInterval(randomSquare, 500);
}

moveMole();


function countDown() {
    currentTime--
    timeLeft$$.textContent = currentTime
    if(currentTime == 0){
        clearInterval(countDownId);
        clearInterval(timerMole);
        alert('GAME OVER! Your final score is: ' + result);
    }

};

let countDownId = setInterval(countDown, 1000);
})
 
 