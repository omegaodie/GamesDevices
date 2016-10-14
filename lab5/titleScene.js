function TitleScene()
{

}
TitleScene.prototype = new Scene();

TitleScene.prototype.render=function() 
{
    //put the rendering code specific to MenuScene here
    ctx.beginPath()
  	ctx.font = "48px serif";
  	ctx.fillText("OVERRIDE", 10, 50);
  	ctx.fill();
}