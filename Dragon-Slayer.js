var slaying = true;
var goodHit = Math.floor(Math.random()*2);
var roundDamage = Math.floor(Math.random()*5 +1);
var totalDamage = 0;
while (slaying) {
    if (goodHit === true) {
        console.log("Good Hit!");
        totalDamage += roundDamage;
        if (totalDamage >= 4) {
            console.log("Congratulations! You slayed the dragon!");
            slaying = false;
        }
        else {
            var goodHit = Math.floor(Math.random()*2);
        }
    } 
    else {
        console.log("You missed the dragon. You can't miss the dragon! You are dead. Do not pass Go, do not collect $200");
    }
    slaying = false;
}
