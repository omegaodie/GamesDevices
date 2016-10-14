var gameData;
function Game(canvas){
	ctx = canvas.getContext('2d');
	window.addEventListener("touchstart", this.gameLoop);
	window.addEventListener("keypress", this.gameLoop);
	window.addEventListener ("mousedown", this.gameLoop);
	this.scnManager = new SceneManager(ctx);
}

Game.prototype.init = function(e){
	console.log("Initialising game");
	game.scnManager.setScene("GAME");
}

Game.prototype.gameLoop = function(e){
	ctx.clearRect(0 , 0, 1280,1080);
	if(e.type == "keypress" ){
		e.preventDefault();
	}
	if(e.type == "mousedown" ){
		e.preventDefault();
		game.scnManager.nextScene(e, ctx);
	}
	game.scnManager.update(e, ctx);
}