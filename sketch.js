const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sunriseImg, sunsetImg, backgroundImg;
var hour;

//var bg = "sunrise.png";

function preload() {
    sunriseImg = loadImage("sunrise.png");
    sunsetImg = loadImage("sunset.png");
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    fill("black");
    textSize(30);
    
    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
    }else if(hour==0){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ hour%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Toronto");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);

    console.log(hour);
    
    if(hour>=0 && hour<18 ){
        //backgroundImg = (sunriseImg);
    }
    else{
        //backgroundImg = (sunsetImg);
    }

    if((hour > 5) && (hour < 17)){
        backgroundImg = (sunriseImg);
    }else{
        backgroundImg = (sunsetImg);
    }
}
