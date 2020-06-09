/// Aplicación

var map = new LoadMapJSON("../res/maps/Map-prueba-00.json");
//Ajax.loadJson("../res/maps/Map-prueba-00.json", function(data){ console.log(data);});

function init() {
    console.log("Aplicacion Iniciada");
    Canvas.init(500, 500, '#33DD33');
    Canvas.setImageSmoothing(false);

    for (let layer of map.objectsWallLayers) {
        for (let o of layer.GetObjects()) {
            obj.push(o);
        }
    }
    
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

    // Draw TileSet

    /*for (var y = 0; y < map.columns; y++) {
        for (var x = 0; x < map.rows; x++) {
            for (var z = 0; z < map.layers.length; z++) {
                if (map.layers[z][x + y * map.rows] <= 0) break;
                var sprite = map.palette.getSpriteI(map.layers[z][x + y * map.rows]-1);
                sprite.setSize(32, 32);
                sprite.setPosition(x*32, y*32);
                sprite.draw();//map.dataLayer00[x + y * map.rows]
            }
        } 
    }*/
    
    for (let i = 0; i < obj.length; i++) {
         obj[i].draw();
    }
}