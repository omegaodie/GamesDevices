
function Player(){
	this.xPos = 150;
	this.yPos = 150;
	this.width = 100;
	this.heigth = 100;

}
Player.prototype.move = function (dir){
	if(dir === "ArrowUp"){
		this.yPos -=  10;
	}else if(dir === "ArrowRight"){
		this.xPos += 10;
	}else if(dir === "ArrowLeft"){
		this.xPos -=  10;
	}else if(dir === "ArrowDown"){
		this.yPos += 10;
	}
}

Player.prototype.draw = function (ctx){
	ctx.beginPath()
	ctx.rect(this.xPos, this.yPos, this.width, this.heigth);
	ctx.fillStyle = 'yellow';
	ctx.fill();
}