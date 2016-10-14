var game, cv;
function main(e){
	
	cv = document.getElementById('myCanvas');
	game = new Game(cv);
    game.init(); 
	timeout();
}



function timeout() {
    setTimeout(function () {
        window.requestAnimationFrame(game.gameLoop);
        timeout();
    }, 1000);
}
