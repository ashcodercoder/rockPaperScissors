let playerChoice = prompt("Are you: Rock, Paper or Scissors?").toLowerCase();//ask player choice

let choice = ["Rock","Paper","Scissors"];//Give the computer options to decide

let userScore=0;
let aiScore=0;


if (playerChoice === "rock"|| playerChoice === "paper"|| playerChoice === "scissors"){
    console.log(`You have chosen ${playerChoice}`);
}else{
    console.log(`${playerChoice} is not a valid value`)
};

function computerPlay(){                //Computer turn
    let random = choice[Math.floor(Math.random()*choice.length)];
    return random;
};  
//console.log(computerPlay());


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    console.log(`The AI chose: ${computerSelection}`);
    playerSelection = playerChoice;
     
    if(playerSelection === "rock" && computerSelection === choice[0] || playerSelection === "paper" && computerSelection === choice[1]||playerSelection === "scissors" && computerSelection == choice[2] ){
        return "It's a tie";
        

    }else if (computerSelection === choice[1] && playerSelection === "rock"  ) {
        console.log (`AI chose ${computerSelection}. He Won!`);
        return aiScore++;

    }else if (playerSelection === "paper" && computerSelection === choice[0]) {
        console.log (`"You chose ${playerSelection}. You won"`);
        return userScore++;

    }else if (playerSelection === "rock" && computerSelection === choice[2]){
        console.log (`"You chose ${playerSelection}. You won"`);
        return userScore++;

    }else if (computerSelection === choice[0] && playerSelection === "scissors"  ){
        console.log (`AI chose ${computerSelection}. He Won!`);
        return aiScore++;

    }else if (playerSelection === "scissors" && computerSelection === choice[1]) {
        console.log (`"You chose ${playerSelection}. You won"`);
        return userScore++;

    }else if(computerSelection === choice[2] && playerSelection === "paper" ){
        console.log (`AI chose ${computerSelection}. He Won!`);
        return aiScore++;

    }else if(playerSelection === "paper" && computerSelection === choice[2]){
        console.log (`"You chose ${playerSelection}. You won"`);
        return userScore++;

    }else{
    
        return "Try again";
    }   
};
  
function game(result){
    result = playRound();
   
    for(let i =0; i<5;i++){
        
            if (userScore < 5 || aiScore < 5) {
            console.log(`You have ${userScore} and AI has ${aiScore} points`)
            return userScore
                     
        }else if(userScore == 5){
            console.log(`Congragulation you scored ${userScore}!`);
        }else(aiScore == 5)
            console.log(`AI you scored ${aiScore}!`);
        }
        return {userScore ,aiScore}
        
    };
  
    
//playRound()
//console.log(playRound());
console.log(game());
