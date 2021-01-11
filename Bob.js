class Bob{
    constructor(x,y,radius){
       var options = {
       isStatic : false,
        //restitution:0.3,
       // friction:0.5,
      
        density:0.9
           
       }
       this.body = Matter.Bodies.circle(x,y,radius,options); 
       this.radius = radius
       
       World.add(world,this.body);
       
    }

     display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(204,204,204);
       ellipse(pos.x,pos.y,this.radius,this.radius);
     }
    }