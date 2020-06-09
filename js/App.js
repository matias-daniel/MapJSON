/// Aplicación

function objTilesPalette(type, x, y, tam, path, data) {
    var dic = {
        "Walls" : new WallNoSolid(x*tam, y*tam, 16, 16, 0),
        "Floors": new WallSolid(x*tam, y*tam, 16, 16, 0)
    }
    
    return dic[type];
}
var map = new LoadMapJSON("../res/maps/Map-prueba-00.json", objTilesPalette);

function init() {
    console.log("Aplicacion Iniciada");
    Canvas.init(500, 500, '#434343');
    Canvas.setImageSmoothing(false);

    for (let o of map.objectsOfTiles)
        obj.push(o);
        
    mainLoop();
}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}

function update() {

}

function draw() {
    Canvas.clear();
    for (let o of obj)
        o.draw();
}