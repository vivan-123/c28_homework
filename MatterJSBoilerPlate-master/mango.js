class Mango
{
    constructor(x,y,radius)
    {   
        var options =
        {
            isStatic : true,
           'weight' : 1,
           'friction' : 1
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.radius = radius;
        this.mango1 = loadImage("images/mango.png");
        this.Visiblity = 255;
        World.add(world, this.body);

       
    }

    display()
    {
        if (this.body.speed < 3)
        {
            imageMode(RADIUS);
            image(this.mango1, this.body.position.x, this.body.position.y, this.body.radius, this.body.radius);
            //console.log(this.body.speed + "speed < 3");
        }
        else
        {
            console.log(this.body.speed + "speed > 3");
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 1;
            tint(255,this.Visiblity);
            pop();
        }
 
    }
}
