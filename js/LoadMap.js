var LoadMapJSON = function(pathToMapJson, objTilesPal) {
    this.rows = null;
    this.columns = null;
    this.tilesWidth = null;
    this.tilesHeight = null;
    this.width = null;
    this.height = null;
    this.palette = null;
    this.dataLayers = new Array();
    this.objectsOfTiles = new Array();
    this.p = pathToMapJson;
    var that = this;

    Ajax.loadJson(pathToMapJson, function(objJson){
        that.rows = objJson.width;
        that.columns = objJson.height;
    
        that.tilesWidth = objJson.tilewidth;
        that.tilesHeight = objJson.tileheight;
    
        that.width = that.rows * that.tilesWidth;
        that.height = that.columns * that.tilesHeight;

        for (let layer of objJson.layers) {
            if (layer.type != "tilelayer") continue;
            for (let i = 0; i < layer.data.length; i++) {
                that.dataLayers.push(layer.data[i]);
            }
        }

        // Layers and layer objects
        that.objectsOfTiles = that.getObjectsFromTiles(that.rows, that.columns,  objJson.layers, objTilesPal, tam, pathToMapJson);

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

LoadMapJSON.prototype.getObjectsFromTiles = function(r, c, layers, objTilesPal, tam, path) {

    var objectsFromTiles = new Array();

    for (let layer of layers) {
        if (layer.type  != "tilelayer") continue;
        
        var typeProp
        if (layer.properties.length != 0) typeProp = layer.properties[0].value;

        for (let y = 0; y < c; y++) {
            for (let x = 0; x < r; x++) {
                //console.log(data);
                if (layer.data[x + y * r] <= 0) continue;
                objectsFromTiles.push(objTilesPal(typeProp, x, y, tam, path, 0));
            }
        }
    }

    return objectsFromTiles;
}