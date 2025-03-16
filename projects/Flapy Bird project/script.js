var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var frame = 0;
var image = new Image();
image.scr = "./img/sprite.png";

function update(){
    
}

function draw(){
    ctx.fillStyle = "rgb(12, 141, 173)"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function animation(){    
    update();
    draw();
    frame++;
    requestAnimationFrame(animation);
}
animation();