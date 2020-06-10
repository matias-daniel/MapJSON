/// Aplicación

function objTilesPalette(type, x, y, tam, path, data) {
    var dic = {
        "Walls" : new WallNoSolid(x*tam, y*tam, tam, tam, 0),
        "Floors": new WallSolid(x*tam, y*tam, tam, tam, 0)
    }
    
    return dic[type];
}

function objectsPalette(type, x, y, props) {
    var dic = {
        "Player" : new Player(x, y, tam, tam, 0, props),
        "Enemy": new Enemy(x, y, tam, tam, 0),
        "": new WallNoSolid(x,y,tam,tam,0)
    }
    
    return dic[type];
}

var map = new LoadMapJSON("../res/maps/Map-prueba-00.json", objTilesPalette, objectsPalette);

function init() {
    console.log("Aplicacion Iniciada");
    Canvas.init(500, 500, '#55DD55');
    Canvas.setImageSmoothing(false);

    Key.init();

    for (let o of map.objectsOfTiles)
        obj.push(o);

    for (let o of map.objectsOfLayerObjects)
        obj.push(o);
        
    mainLoop();
}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}

function update() {
    for (let o of obj)
        o.update();
}

function draw() {
    Canvas.clear();
    for (let o of obj)
        o.draw();
}