var game, cv, lvlLoader;
function main(e){
	
	cv = document.getElementById('myCanvas');
	game = new Game(cv); 
	timeout();
}



function timeout() {
    setTimeout(function () {
        // Do Something Here
        // Then recall the parent function to
        // create a recursive loop.
        window.requestAnimationFrame(game.gameLoop);
        timeout();
    }, 1000);
}
