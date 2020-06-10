// OBJETOS
class Obj {
    constructor(x, y, w, h, id, props) {
        this.x = Math.floor(x);
        this.y = Math.floor(y);
        this.w = Math.floor(w);
        this.h = Math.floor(h);
        this.id = id;
        this.type = "Object";
    }
    draw(){}
    update(){}
}
// PLAYER
class Player extends Obj { // AMARILLO
    constructor(x, y, w, h, id, props)  {
        super(x, y, w, h, id, props);
        this.type = "Player";
        if (props) {
            this.speed = props[1].value;
            console.log(this.speed);
        }
    }
    update() {
        let move = {x:(Key.down('d')-Key.down('a')), y:(Key.down('s')-Key.down('w'))};
        this.x += move.x * this.speed;
        this.y += move.y * this.speed;
    }
    draw() {
        Canvas.setColor('#FFFF00');Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}
// ENEMY
class Enemy extends Obj { // ROJO
    constructor(x, y, w, h, id) {
        super(x, y, w, h, id, false);
        this.type = "Enemy";
    }
    draw() {
        Canvas.setColor('#00FF00');Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}
// WALLS
class WallSolid extends Obj { // GRIS
    constructor(x, y, w, h, id) {
        super(x, y, w, h, id, false);
        this.type = "WallSolid";
    }
    draw() {
        Canvas.setColor('#444444');Canvas.drawRect(this.x, this.y, this.w, this.h);
    }
}
//--
class WallNoSolid extends Obj { // VERDE
    constructor(x, y, w, h, id) {
        super(x, y, w, h, id, false);
        this.type = "WallNoSolid";
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