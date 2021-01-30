class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 4.2,
            length: 25
        }
        this.pointB= pointB
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
    fly(){
      this.Sling.bodyA= null  
    }

    display(){
        if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
       
        line(pointB.x, pointB.y, pointA.x, pointA.y);
    }
    strokeWeight(0);
    }
    
}