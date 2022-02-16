var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB, prevX, prevY;

function setup()
{
	createCanvas(window.innerWidth,window.innerHeight);
	noStroke();

	phase = 0;
	speed = 0.1;
	maxCircleSize = 25;
	numRows = 1;
	numCols = 20;
	numStrands = 4;

	colorA = color(253,174,120);
	colorB = color(226, 129, 161);
}

function draw() {
	background(4, 58, 74);
	phase = frameCount * speed;
	for(var strand = 0; strand < numStrands; strand += 1)
	{
		var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
		for(var col = 0; col < numCols; col += 1)
		{
			var colOffset = map(col, 0, numCols, 0, TWO_PI);
			var x = map(col, 0, numCols, 50, width - 50);
			for(var row = 0; row < numRows; row += 1)
			{
				var y = height/2 + row * 10 + sin(strandPhase + colOffset) * 50;
				var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
				var circleSize = sizeOffset * maxCircleSize;

				stroke(lerpColor(colorA, colorB, row / numRows));
				line(prevX, prevY, x, y);
				prevX = x;
				prevY = y;
				noStroke();
				fill(lerpColor(colorA, colorB, col / numCols));
				ellipse(x, y, circleSize, circleSize);
			}
		}
	}
}