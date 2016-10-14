function Scene(name){
	this.type = name;
	this.active = false;
}

Scene.prototype.render = function(ctx){
	if(this.active == true){
		ctx.beginPath()
  		ctx.font = "48px serif";
  		ctx.fillText(this.type, 10, 50);
  		ctx.fill();
	}
}

Scene.prototype.start = function(){
	this.active = true;
}

Scene.prototype.stop = function(){
	this.active = false;
}

Scene.prototype.setType = function(type){
	this.type = type;
}