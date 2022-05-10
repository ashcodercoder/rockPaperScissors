let playerChoice = prompt("Are you: Rock, Paper or Scissors?");//ask player choice

let choice = ["Rock","Paper","Scissors"];//Give the computer options to decide


if (playerChoice === "Rock"|| playerChoice === "Paper"|| playerChoice === "Scissors"){
    console.log(`You have chosen ${playerChoice}`);
}else{
    console.log("Write valid value")
};

function computerPlay(){                //Computer turn
    let random = choice[Math.floor(Math.random()*choice.length)];
    return random;
};  
//console.log(computerPlay());


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    let computerChoice = computerSelection
    console.log(computerChoice);
    playerSelection = playerChoice;
    let playerPoints = 0;
    let computerPoints = 0; 
      
    if(playerSelection === "Rock" && computerChoice === choice[0] || playerSelection == "Paper" && computerChoice == choice[1]||playerSelection == "Scissors" && computerChoice == choice[2] ){
        return "It's a tie";
        

    }else if (computerChoice === choice[1] && playerSelection === "Rock"  ) {
        console.log("Paper beats Rock");
        computerPoints++;

    }else if (playerSelection === "Paper" && computerChoice === choice[0]) {
            console.log("Paper beats Rock");
            playerPoints++;

    }else if (playerSelection === "Rock" && computerChoice === choice[2]){
        console.log("Rock beats Scissors");
        playerPoints++;

    }else if (computerChoice === choice[0] && playerSelection === "Scissors"  ){
            console.log("Rock beats Scissors");
            computerPoints++;

    }else if (playerSelection === "Scissors" && computerChoice === choice[1]) {
         console.log("Scissors beats paper");
         playerPoints++;

    }else if(computerChoice === choice[2] && playerSelection === "Paper" ){
        console.log("Scissors beats Paper");
        computerPoints++;

    }else if(playerSelection === "Paper" && computerChoice === choice[2]){
        console.log("Scissors beats Paper");
        playerPoints++;

    }else{
    
        console.log("Try again");
    }
     
    console.log(playerPoints);  
    console.log(computerPoints);    
    
    };
         
            


   

    
console.log(playRound());
