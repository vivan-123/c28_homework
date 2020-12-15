class Stone
{
    constructor(x,y,radius)
    {   
        var options =
        {
            isStatic : false,
           'weight' : 1,
           'friction' : 1
        }

        this.body = Bodies.circle(x,y,radius,options)
        this.body.position.x = x;
        this.body.position.y = y;
        this.body.radius = radius;
        this.circle1 = loadImage("images/stone.png");
        World.add(world, this.body);

       
    }

    display()
    {
        
        imageMode(RADIUS);
        imageMode(CENTER);
        image(this.circle1, this.body.position.x, this.body.position.y, this.body.radius * 2, this.body.radius * 2);
        //circle(this.body.position.x,this.body.position.y,this.body.radius);
    }
}
