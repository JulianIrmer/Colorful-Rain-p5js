const width = window.innerWidth;
const height = window.innerHeight;
const bgColor = 100;
let y = -20;
const arr = [];
let count = 190; 
let speed;
let rColor;
let gColor;
let bColor;

function setup(){
    frameRate(60);
    createCanvas(width, height);
    fillArr();
}

function draw(){
    background(bgColor);
    drawDots();
    sliderListener()
}

function fillArr(){
    for(let i = 0; i < count; i++){
        arr[i] = new Dot(y);
    }
}

function drawDots(){
    for(let i = 0; i < arr.length; i++){
        arr[i].show();
        arr[i].update();
    }
}

function sliderListener(){
    speed = document.querySelector("#speed").value;
    rColor = document.querySelector("#rColor").value;
    gColor = document.querySelector("#gColor").value;
    bColor = document.querySelector("#bColor").value;

    speed.oninput = function(){
        speed = this.value;
    }
    rColor.oninput = function(){
        rColor = this.value;
    }
    gColor.oninput = function(){
        gColor = this.value;
    }
    bColor.oninput = function(){
        bColor = this.value;
    }
}