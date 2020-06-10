/// Aplicación

<<<<<<< HEAD
var map = new LoadMapJSON("../res/maps/Map-prueba-00.json");
//Ajax.loadJson("../res/maps/Map-prueba-00.json", function(data){ console.log(data);});

function init() {
    console.log("Aplicacion Iniciada");
    Canvas.init(500, 500, '#33DD33');
=======
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
>>>>>>> 8515ec9... Falta poco :3
    Canvas.setImageSmoothing(false);
    console.log(map.objectsWallLayers);

<<<<<<< HEAD
    for (let i = 0; i < map.objectsWallLayers.length; i++)
        for (let j = 0; j < map.objectsWallLayers[i].GetObjects().length; j++)
            obj.push(map.objectsWallLayers[i].GetObjects(j));


    //obj.push(map.objectsWallLayers[1].GetObjects());
    //console.log( map.objectsWallLayers[0].GetObjects()[0]);
    console.log(obj[0][0]);
    
    
    
=======
    Key.init();

    for (let o of map.objectsOfTiles)
        obj.push(o);

    for (let o of map.objectsOfLayerObjects)
        obj.push(o);
        
>>>>>>> 8515ec9... Falta poco :3
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
        for (let j = 0; j < obj[i].length; j++) {
            obj[i][j].draw();
        }
    }
}