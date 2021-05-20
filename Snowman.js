class Snowman {
    constructor(x,y){
        var options={
            //density: 0.6
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        //Have increased size
        this.width=300;
        this.height=420;
        this.image = loadImage("snowman.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        
        imageMode(CENTER)
        //rectMode(CENTER);
        //rect(pos.x,pos.y);
        //rect(pos.x,pos.y,this.width,this.height);
        image(this.image, pos.x, pos.y,200,320);
           
     }
}