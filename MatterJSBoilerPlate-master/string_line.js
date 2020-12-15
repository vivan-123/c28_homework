
class StringConstraint
{
    constructor(bodyA,pointB)
    {
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.1,
                length: 100
            }
        
            this.pointB = pointB
            this.string = Constraint.create(options);
            World.add(world, this.string);
     
    }
    display()
    {
        if (this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(7);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

    fly(){
        this.string.bodyA = null;
    }

    attach(body){
        this.string.bodyA = body;
    }
}