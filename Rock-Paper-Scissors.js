var userChoice = prompt("Do you choose rock, paper, or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.33333333333333)
{
    computerChoice = "rock";
}
else if (computerChoice < 0.6666666666666)
{
    computerChoice = "paper";
}
else
{
    computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);
var compare = function (choice1, choice2)
{
    if (choice1 === choice2) {
        return "The result is a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
}
console.log(compare (userChoice, computerChoice));