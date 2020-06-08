var Canvas = {
	can: null,
	ctx: null,
	width: 500,
	height: 500,
	background: "#000000",
	color: "#000000",
	init: function(w, h, back) {
		Canvas.can = document.getElementById("canvas");
		Canvas.ctx = Canvas.can.getContext('2d');
		Canvas.width      = w;
		Canvas.height     = h;
		Canvas.background = back;
	},
	setImageSmoothing: function(value) {
		Canvas.ctx.mozImageSmoothingEnabled = value;
		Canvas.ctx.webkitImageSmoothingEnabled = value;
		Canvas.ctx.msImageSmoothingEnabled = value;
		Canvas.ctx.imageSmoothingEnabled = value;
	},
	update: function() {
		// Update size
		Canvas.can.width = Canvas.width;
		Canvas.can.height = Canvas.height;
	},
	clear: function() {
		// Clear canvas
		Canvas.ctx.fillStyle = Canvas.background;
		Canvas.ctx.fillRect(0, 0, this.width, this.height);
	},
	drawRect: function(x, y, w, h) {
		Canvas.ctx.fillStyle = Canvas.color;
		Canvas.ctx.fillRect(x, y, w, h);
	},
	fillRect: function(x, y, w, h) {
		Canvas.ctx.fillStyle = Canvas.color;
		Canvas.ctx.fillRect(x, y, w, h);
	},
	setColor: function(color) {
		Canvas.color = color;
	},
	drawImage: function(img, x, y, w, h, px, py, pw, ph) {
		Canvas.ctx.drawImage(img, px, py, pw, ph, x, y, w, h);
	}

}