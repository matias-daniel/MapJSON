// OBJETOS
class Obj {
    constructor() {}
    draw(){}
}
// PLAYER
class Player extends Obj { // AMARILLO
    constructor(x, y, w, h, id)  {
        this.x = x;this.y = y;this.w = w;this.h = h;this.type = "Player";
    }
    draw() {
        Canvas.setColor('#FFFF00');Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}
// ENEMY
class Enemy extends Obj { // ROJO
    constructor(x, y, w, h, id) {
        this.x = x;this.y = y;this.w = w;this.h = h;this.type = "Enemy";
    }
    draw() {
        Canvas.setColor('#00FF00');Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}
// WALLS
class WallSolid extends Obj { // GRIS
    constructor(x, y, w, h, id) {
        super();
        this.x = x;this.y = y;this.w = w;this.h = h;this.type = "WallSolid";
    }
    draw() {
        Canvas.setColor('#444444');Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}
//--
class WallNoSolid extends Obj { // VERDE
    constructor(x, y, w, h, id) {
        super();
        this.x = x;this.y = y;this.w = w;this.h = h;this.type = "WallNoSolid";
    }
    draw() {
        Canvas.setColor('#00FF00');Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}

// PROPERTIES
var tam = 16;

// OWNER
var obj = new Array();

// OBJETOS