let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["stone","paper","scissors"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
};
const drawgame = () =>{
    msg.innerText="Game was draw plz play again";
    msg.style.backgroundColor = "#a98467";
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText=`you win ! your ${userChoice} beats computer ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{compScore++;
        compScorepara.innerText = compScore;
        msg.innerText=`You lose !  computer ${compChoice} beats  your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};
const playgame = (userChoice) =>{
    console.log("user choice",userChoice);
    //generate compchoice
    const compChoice = gencompchoice();
    console.log("compChoice",compChoice);

    if (userChoice === compChoice){
        drawgame();
    }
    else {
    let userWin = true;
    if (userChoice === "stone"){
        //scissors,paper
        userWin = compChoice === "paper" ? false:true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false:true;
    }
    else{
        userWin = compChoice === "stone" ? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
        
    });
}) ;

