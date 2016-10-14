var gameData;
function Game(canvas){
	ctx = canvas.getContext('2d');
	window.addEventListener("touchstart", this.gameLoop);
	window.addEventListener("keypress", this.gameLoop);
	window.addEventListener ("mousedown", this.gameLoop);
	var cv = document.getElementById('myCanvas');
	var rect = cv.getBoundingClientRect();
	player = new Player();
}

Game.prototype.gameLoop = function(e){
	
	if(e.type == "keypress" ){
		e.preventDefault();

		player.move(e.key);
	}
	ctx.clearRect(0 , 0, 1280,1080);
	console.log("ruinin");

	player.draw(ctx);

}