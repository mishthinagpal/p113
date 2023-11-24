function preload(){

}

function setup(){
    canvas=createCanvas(600 , 600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

   
}
function draw(){
    image(video,50,50,500,500);
   circle(60,60 ,100);
   fill("red");
   circle(60,550,100);
   circle(550,60,100);
   circle(550,550,100)
}

function take_snapshot(){
    save('Mishthi.png')
}

