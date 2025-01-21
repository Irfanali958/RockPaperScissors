let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let uservalue = document.querySelector("#user-score");
let botvalue = document.querySelector("#bot-score");

let userscore = 0;
let botscore = 0;

const showwinner =(userwin,userchoice,botchoice)=>{
    if(userwin){
        userscore++;
        console.log("user won");
        msg.innerText = `You have won, your ${userchoice} beats ${botchoice}`;
        msg.style.background = "green";
        uservalue.innerText = userscore;
    }
    else{
        botscore++;
        console.log("user lost");
        msg.innerText = `You have lost, your ${userchoice} lost to ${botchoice}`;
        msg.style.background = "red";
        botvalue.innerText = botscore; 
    }
}

const gamedraw =()=>{
    msg.innerText = "The is a draw";
    msg.style.background = "black";
}

const checkwinner = (userchoice,botchoice)=>{
    if(userchoice === botchoice){
        console.log("The is a draw");
        gamedraw();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            //paper,scissors
            userwin = (botchoice === "paper")? false:true;
        }
        else if(userchoice === "paper"){
            //rock,scissors
            userwin = (botchoice === "scissors")?false:true;
        }
        else{
            //rock,paper
            userwin = (botchoice === "rock")?false:true;
        }
        showwinner(userwin,userchoice,botchoice);
    }
} 

const genbotchoice = ()=>{
    const options = ["rock","paper","scissors"];
    let randopt = Math.floor(Math.random() * 3);
    return options[randopt];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userchoice = choice.getAttribute("id");
        console.log("userchoice is ",userchoice);
        let botchoice = genbotchoice();
        console.log("botchoice is ",botchoice);
        checkwinner(userchoice,botchoice);
    });
});