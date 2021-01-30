class Hero {
    constructor(x,y,width){
    
        var option={
    'frictionAir':0.005,
    'density':1.0
}
this.x=x
this.y=y
this.width=width
this.image = loadImage("Monster-01.png","Monster-02.png")
this.body= Bodies.circle(this.x,this.y,width,option)
 }
 display(){
    push()
     var angle = this.body.angle;
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);

     imageMode(CENTER)
     image( this.image,0, 0, this.width);


     pop()
 }
}