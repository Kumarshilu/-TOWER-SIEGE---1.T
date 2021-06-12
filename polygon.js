class Polygon{

    constructor(x,y,width,height){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        polygon = Bodies.circle(50,200,20);
        polygon.image = loadImage("polygon.png");
        World.add(world,polygon);

        slingShot = new Slingshot(this.polygon,{x:100,Y:200});
    }

    display(){
        push();
        var angle = polygon.angle;
        translate(polygon_img.position.x, polygon.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(polygon_image,polygon.position.x,polygon.position.y,40,40);
        pop();
    }
}
