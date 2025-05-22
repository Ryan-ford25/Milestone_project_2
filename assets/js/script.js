let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    turnNumber: 0,
    lastNumber: "",
    turnInProgress: false,
    choices: ["button1","button2","button3","button4","button5","button6","button7","button8","button9"],
    lives : 3,
}

$("#start").on("click", function(){
    $("#play_area").removeClass("hidden");
    $("#rules_area").addClass("hidden");
})

$("#rules").on("click", function(){
    $("#play_area").addClass("hidden");
    $("#rules_area").removeClass("hidden");
})

$("#start2").on("click", function(){
    $("#play_area").removeClass("hidden");
    $("#rules_area").addClass("hidden");
})

function startGame(){
    game.score=0;
    game.playerMoves = [];
    game.currentMoves = [];
    for (let gridSquare of document.getElementsByClassName("grid_square")) {
        if (gridSquare.getAttribute("data-listener") !== "true"){
            gridSquare.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) {
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    lightsOn(move);
                    game.playerMoves.push(move);
                    playerTurn();
                }
            });
            gridSquare.setAttribute("data-listener", "true")
        }
    }
}


module.exports = {game, startGame, showScore, addTurn, lightsOn, showTurns, playerTurn};