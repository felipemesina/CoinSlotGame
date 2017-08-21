

function gameSlots(tokens){
    for(var game=tokens; game>=0; game--)
    {
        if(game===0){
            console.log("Not Enough Tokens!");
            
        }
        else{
            // game logic
            //generate a random number and store as numberRolled
            // if number rolled is equal to 17 then we win
            var numberRolled= Math.floor(Math.random() * 100);
            
            if (numberRolled===17){
                tokens+=(Math.floor(Math.random() * (100-50)+ 50));
                console.log("You won " + tokens + " tokens!" );
                game=tokens;
            }
            else{
                console.log("You lose!");
            }
        }
    }
}
gameSlots(50);

