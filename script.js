let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drowgame = () => {
    msg.innerText = "Game was Drow. Play again";
};

const showwinner = (userwin, userChoice, compChoice) => {
    if(userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }   
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }    
};

const playgame = (userChoice) => {
    // Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        // Drowgame
    drowgame();
    }
    else {
        let userwin = true;
        if(userwin === "rock") {
            //pepar scissors
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userwin === "paper") {
            // rock scissors
            userwin = compChoice === "scissors" ? false : true;
        }
        else {
            //rock paper
           userwin = compChoice === "rock" ? false : true;
        }
        showwinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");  // Correctly store the id attribute
        playgame(userChoice);
    });
});
