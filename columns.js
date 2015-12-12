
function Column(x, y) {
	this.x = x;
	this.y = y;
	this.blocks = [];
	
	for(var i = 0; i < 3; i++) {
		this.blocks.push(Math.floor((Math.random() * 5) + 0))
	}
}


function RenderColumn(column, options) {
	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	
	for(var i = 0; i < column.blocks.length; i++) {
	
		context.fillStyle = options.blockColors[column.blocks[i]];
		context.fillRect(
			column.x * options.blockWidth,
			(column.y + i) * options.blockHeight,
			options.blockWidth,
			options.blockHeight
		);
	}
}


window.onload = function() {
		
	var options = {
		blockWidth: 32,
		blockHeight: 32,
		blockColors : [
			'#2E9AFE',
			'#FE9A2E',
			'#DF013A',
			'#81F781',
			'#DF01A5'
		]
	};
	
	var column = new Column(0,0);
	
	window.requestAnimationFrame(function loop() {
		window.requestAnimationFrame(loop);
		
		
		RenderColumn(column, options);
	});
}