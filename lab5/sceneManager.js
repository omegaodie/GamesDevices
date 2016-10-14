function SceneManager(ctx){
	this.Scenes = [
		 new TitleScene(),
		 new Scene("MENU"),
		 new Scene("GAME"),
		 new Scene("OVER")
	];
	this.state = "MENU";
	this.current = 0;
	this.Scenes[this.current].start();

}


SceneManager.prototype.update = function(e, ctx){
/*	if(this.state == "MENU"){
		this.Scenes.menu.render(ctx);
	}else if(this.state == "GAME"){
		this.Scenes.game.render(ctx);
	}else if(this.state == "OVER"){
		this.Scenes.over.render(ctx);
	}else{
		this.Scenes.title.render(ctx);
	}*/

	this.Scenes[this.current].render(ctx);
}


SceneManager.prototype.setScene = function(scene){
/*	if(scene === "GAME"){
		this.gmScn.start();
	}else{
		this.gmScn.stop();
	}*/
}

SceneManager.prototype.getScene = function(){
	return this.state;
}
SceneManager.prototype.nextScene = function(){
	this.Scenes[this.current].stop();
	this.current += 1;
	this.Scenes[this.current].start();
}