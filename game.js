
let choice = ["Rock","Paper","Scissors"];//Give the computer options to decide

let userScore=0;
let aiScore=0;
//const playerSelection = " ";

   
function computerPlay(){                //Computer turn
    let random = choice[Math.floor(Math.random()*choice.length)];
    return random;
};  

function playRound(playerSelection, computerSelection){
    playerSelection = prompt("Are you: Rock, Paper or Scissors?").toLowerCase();
    
    computerSelection = computerPlay();
    //console.log(`The AI chose: ${computerSelection}`);
     
    if(playerSelection === "rock" && computerSelection === choice[0] || playerSelection === "paper" && computerSelection === choice[1]||playerSelection === "scissors" && computerSelection == choice[2] ){
        console.log(`It's a tie. You chose ${playerSelection} and AI chose ${computerSelection} `);
               

    }else if (computerSelection === choice[1] && playerSelection === "rock"  ) {
        console.log (`AI chose ${computerSelection} and you chose ${playerSelection}. He Won!`);
         aiScore++;
         

    }else if (playerSelection === "paper" && computerSelection === choice[0]) {
        console.log (`You chose ${playerSelection} and he chose ${computerSelection}. You won`);
         userScore++;
         

    }else if (playerSelection === "rock" && computerSelection === choice[2]){
        console.log (`You chose ${playerSelection} and he chose ${computerSelection}. You won`);
         userScore++;
         

    }else if (computerSelection === choice[0] && playerSelection === "scissors"  ){
        console.log (`AI chose ${computerSelection} and you chose ${playerSelection}. He Won!`);
        aiScore++;
         

    }else if (playerSelection === "scissors" && computerSelection === choice[1]) {
        console.log (`You chose ${playerSelection} and he chose ${computerSelection}. You won`);
         userScore++;
         

    }else if(computerSelection === choice[2] && playerSelection === "paper" ){
        console.log (`AI chose ${computerSelection} and you chose ${playerSelection}. He Won!`);
         aiScore++;
       

    }else if(playerSelection === "paper" && computerSelection === choice[2]){
        console.log (`"You chose ${playerSelection} and he chose ${computerSelection}. You won"`);
        userScore++;
        
        return 
    }  
} 
  

function game(){
    for(let i =0; i<5 ;i++){
        playRound(i);
            
       };
        
    if(userScore > aiScore){
        console.log(`Congragulation you won! You scored ${userScore}!`);
           
    }else if(aiScore > userScore){
        console.log(`Sorry you lost. AI has scored ${aiScore}!`);
           
    }else
    console.log(`It's a tie. You scored ${userScore} and AI scored ${aiScore}`)
        
    }   
      
 

game();
