class Dot{
    constructor(y){
        //position
        this.x = random(0, width);
        this.y = random(-height, 0);

        //speed
        this.v = random(7,speed);

        //shape
        this.w = random(1,4);
        this.h = random(10, 30);

        //color
        // this.r = random(0, 255);
        // this.g = random(0, 255);
        // this.b = random(0, 255);
        // this.r = rColor;
        // this.g = gColor;
        // this.b = bColor;
        this.a = random(100, 255);

        //variation
        this.offset = random(5,15);
        this.offsetS = random(1,3);
    }

    show(){
        // Objects further away will be displayed smaller. 
        if(this.v >= 6){
            rect(this.x, this.y, this.w+this.offsetS, this.h+this.offset);
        }

        if(this.v < 6){
            rect(this.x, this.y, this.w-1, this.h-this.offset);
        }
        noStroke();
        fill(this.r, this.g, this.b, this.a);
    }

    update(){
        this.y += this.v;
        if(this.y > height+30){
            this.randomize();
        }
    }

    randomize(){
        this.x = random(0, width);
        this.y = random(-130, -30);
        this.v = random(3,speed);
        this.r = random(0, rColor);
        this.g = random(0, gColor);
        this.b = random(0, bColor);
    }
}