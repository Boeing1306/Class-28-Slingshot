class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 40
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    Birdfly(){
        this.sling.bodyA = null;
    }
    display(){
        if (this.sling.bodyA){

        var posA = this.sling.bodyA.position;
        var posB = this.pointB;

        strokeWeight(5);

        line(posA.x,posA.y,posB.x,posB.y);
        }
    }
    
}