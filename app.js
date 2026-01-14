let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score") ;
const compScorePara = document.querySelector("#computer-score") ;


const genCompChoice = () => {
    const moves = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3) ;
    return moves[randIdx];
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin)
    {
        userScorePara.innerText = userScore;
        userScore++;
        msg.innerText = `Congratulations!! YOU WIN. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";


    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `OPSS!! YOU LOST . ${compChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor = "red";


    }

}


const playGame = (userChoice) =>{
    console.log("clicked ", userChoice);
    const compChoice = genCompChoice();
    console.log("CompChoice ", compChoice);
    if(userChoice === compChoice)
    {
        msg.innerText = "Game was Draw. Play Again";
        msg.style.backgroundColor = "#081b31";
    }
    else 
    {
        let userWin = true;
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper")
        {
            userWin = compChoice === "scissors" ? false: true;
        
        }
        else
        {
            userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }



};


const choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
})