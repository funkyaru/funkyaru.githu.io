var image;
function upload(){
	var fileinput=document.getElementById("finput");
	var filename=fileinput.value;
	alert("Choose " + filename);
	image=new SimpleImage(fileinput);
	var imgcanvas=document.getElementById("canvas");
	image.drawTo(imgcanvas);
	
}
function makegray(){
	for(var px of image.values()){
		var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
		px.setRed(avg);
		px.setGreen(avg);
		px.setBlue(avg);
	}
	var imgcanvas=document.getElementById("canvas");
	image.drawTo(imgcanvas);
}

function makered()
{
	for(var px of image.values())
	{
		px.setRed(150);
		
	}
	var imgcanvas=document.getElementById("canvas");
	image.drawTo(imgcanvas);
}