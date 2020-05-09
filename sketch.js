var x,y;
var drawing=[];
function setup (){
    createCanvas(displayWidth,displayHeight);

}
function draw(){
    background("white");
    for(var i= 0;i<drawing.length;i++){
        console.log(drawing[i])
    }

    drawSprites();
}
function mouseDragged(){
    var point ={
        x:mouseX,
        y:mouseY
    }
    drawing.push(point);
}