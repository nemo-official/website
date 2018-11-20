$(document).ready(function(){
	var red = [0, 100, 63];
	var orange = [40, 100, 60];
	var green = [75, 100, 40];
	var blue = [196, 77, 55];
	var purple = [280, 50, 60];

	var myName = "Welcome";
	var letterColors = [red, orange, green, blue, purple]
	if(10 > 3) {
	    bubbleShape = "circle";
	}
	else {
	    bubbleShape = "square";
	}

	$('.bubbleButton').click(function(){
		if ($("input[name=message]").val() === null){
			myName = "Welcome";
			drawName(myName, letterColors);
		} else {
			myName = $("input[name=message]").val();
			drawName(myName, letterColors);
		}
	});

	drawName(myName, letterColors);
	bounceBubbles()


});
