<<<<<<< HEAD
class ObjectsWallLayer {
    constructor(type, solid, data, rows, columns) {
        this.type = type;
        this.solid = solid;
        this.data = data;
        this.rows = rows;
        this.columns = columns;
    }

    GetObjects() {
        var objects = new Array();
        var id = 0;
       // console.log(this.solid);
        switch(this.type) {
            case "Walls":
                switch(this.solid) {
                    case true:
                        for (var y = 0; y < this.columns; y++ ) {
                            for (var x = 0; x < this.rows; x++) { 
                                if (this.data[x+y*this.rows] <= 0) continue;
                                objects.push(new WallSolid(x * tam, y * tam, tam, tam, id));
                                id ++; 
                            }
                        }
                        break;
                    case false:
                        for (var y = 0; y < this.columns; y++ ) {
                            for (var x = 0; x < this.rows; x++) {
                                if (this.data[x+y*this.rows] <= 0) continue;
                                objects.push(new WallNoSolid(x * tam, y * tam, tam, tam, id));
                                id ++; 
                            }
                        }
                        break;
                    default:
                        console.log("Pon entre comillas el true y false");
                }
                break;
            default:
                console.log("Este tipo no esta verificado");
        }
        //console.log(objects);
        return objects;
    }
}

var LoadMapJSON = function(pathToMapJson) {
=======
var LoadMapJSON = function(pathToMapJson, objTilesPal, objPal) {
>>>>>>> 8515ec9... Falta poco :3
    this.rows = null;
    this.columns = null;
    this.tilesWidth = null;
    this.tilesHeight = null;
    this.width = null;
    this.height = null;
    this.palette = null;
<<<<<<< HEAD
    this.layers = new Array();
    this.objectsWallLayers = new Array();
    //this.path = pathToMapJson;
=======
    this.dataLayers = new Array();
    this.objectsOfTiles = new Array();
    this.objectsOfLayerObjects = new Array();
    this.p = pathToMapJson;
>>>>>>> 8515ec9... Falta poco :3
    var that = this;
    //Ajax;
    Ajax.loadJson(pathToMapJson, function(objJson){
        that.rows = objJson.width;
        that.columns = objJson.height;
    
        that.tilesWidth = objJson.tilewidth;
        that.tilesHeight = objJson.tileheight;
    
        that.width = that.rows * that.tilesWidth;
        that.height = that.columns * that.tilesHeight;

        // Layers and layer objects
<<<<<<< HEAD
        for (let i = 0; i < (objJson.layers.length); i++) {
            switch(objJson.layers[i].type){
                case "tilelayer":
                    that.layers[i] = objJson.layers[i].data; // layers
                    // Walls
                    let solid = false, type = 'pete';
                    for (let p = 0; p < objJson.layers[i].properties.length; p++) {
                        switch(objJson.layers[i].properties[p].name) {
                            case "Solid": solid = objJson.layers[i].properties[p].value; break;
                            case "Type": type = objJson.layers[i].properties[p].value; console.log("._.XD");break;
                        }
                    }

                    that.objectsWallLayers.push(new ObjectsWallLayer(type, solid, objJson.layers[i].data, that.rows, that.columns));
=======
        that.objectsOfTiles = that.getObjectsFromTiles(that.rows, that.columns,  objJson.layers, objTilesPal, tam, pathToMapJson);
        that.objectsOfLayerObjects = that.getObjectsFromLayerObjects(objJson.layers, objPal);
>>>>>>> 8515ec9... Falta poco :3

                    break;
                case "objectgroup":
                    //hat.objectsLayers[i] = objJson.layers[i].objects; // layers
                    break;
            }
        }
    
        // Set palette
        Ajax.loadJson("../" + objJson.tilesets[0].source, function(objJsonSource) {
            var rowsSource = objJsonSource.imagewidth / objJsonSource.tilewidth;
            var columnsSource = objJsonSource.imageheight / objJsonSource.tileheight;
            var tileWidth = objJsonSource.tilewidth;
            var tileHeight = objJsonSource.tileheight;
    
            that.palette = new SpriteSheet("../" + objJsonSource.image, rowsSource, columnsSource, tileWidth, tileHeight);
        });
    });
}

<<<<<<< HEAD
LoadMapJSON.prototype.GetObjects = function() {

}


/*
    Ajax.loadJson("../" + objJson.tilesets[0].source, function(objJsonSource) {
        
});*/
=======
LoadMapJSON.prototype.getObjectsFromTiles = function(r, c, layers, objTilesPal, tam, path) {
    var objectsFromTiles = new Array();

    for (let layer of layers) {
        if (layer.type  != "tilelayer") continue;
        
        var typeProp
        if (layer.properties.length != 0) typeProp = layer.properties[0].value;

        for (let y = 0; y < c; y++) {
            for (let x = 0; x < r; x++) {
                if (layer.data[x + y * r] <= 0) continue;
                objectsFromTiles.push(objTilesPal(typeProp, x, y, tam, path, 0));
            }
        }
    }

    return objectsFromTiles;
}

LoadMapJSON.prototype.getObjectsFromLayerObjects = function(layers, objPal) {
    var objectsFromLayerObjects = new Array();

    for (let objLayer of layers) {
        if (objLayer.type != 'objectgroup') continue;
        if (!objLayer.properties) continue;

        switch(objLayer.properties[0].value) {
            case "NoProp":
                for (let o of objLayer.objects) {
                    objectsFromLayerObjects.push(objPal(o.type, o.x, o.y, null));
                }
                break;
            case "Prop":
                for (let o of objLayer.objects) {
                    objectsFromLayerObjects.push(objPal(o.type, o.x, o.y, o.properties));
                }
                break;
            default:
                console.log("propiedad no default");
                console.log(objLayer.type);
        }

    }

    return objectsFromLayerObjects;
}
>>>>>>> 8515ec9... Falta poco :3
