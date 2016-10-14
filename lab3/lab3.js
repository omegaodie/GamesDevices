function square(n)
{
  return n*n;
}

function main()
{
	var a = {'Mike':'aye','Joe':'aye','Johnson':'aye','Peter':'aye'};
	pirates(a);
/*	if(square(5)==25)
	{
		console.log("OK");
	}	
	else
	{
		console.log("square FAIL");
	}*/
}



function howManyLightsabersDoYouOwn(e) {
	if(e !== "Zach"){
		return 18;
	}else{
		return 0;
	}
}

function averageMarks(e){
	var total = 0;
	for(var i = 0; i < e.length; i++){
		total += e[i];
	}
}

function pirates(e){
	for (var value in e) {
		if(e[value] === "aye"){
			return "Shiver me timbers!";
		}
	}
	return "Fire";
}



function crashOverride(first, second){
  var x = first[0].toUpperCase();
  var y = second[0].toUpperCase();
  
   if(isNaN(first[0]) && isNaN(second[0]))
     {
       return firstName[x] + ' ' + surname[y];
     }
   else
       {
     return "Your name must start with a letter from A - Z."; 
       }  
}