var score = 0;

function constructField(rows, cols){
    field = []
    for(var r = 0; r<rows; r++){
        field.push([])
        for(var c= 0; c<cols; c++){
            field[r].push(0);
        }
    }
    console.log(field);
    return(field);
}

class Farm{
    constructor(rows, cols){
        rows = this.rows;
        cols = this.cols;
        field = constructField(rows,cols);
    }
}

class Tile{
    constructor(){
        crop = none;
        water = 100;
    }
}
function addScore(){
    console.log("This is score:" + score + "done");
    score = score + 10;
    document.getElementById("score").textContent = "Score: " + score;
}
/*
td.onclick = function(event) {
    addScore();
}
*/
var tiles = document.getElementsByTagName("td");

tilen = tiles.length;

for(var p = 0; p < tilen; p++){
    tiles[p].onclick = function(event) {
        addScore();
    }
}

console.log(tiles);
/*
tiles[0].onclick = function(event) {
    addScore();
}
*/
constructField(3,3);