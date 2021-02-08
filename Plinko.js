class Plinko{
    constructor(x, y, r) {

        var options = {
            'restitution':1,
            'isStatic' : true,
            'friction':0,
            'density':0.8
        }


        this.x = x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
        
        World.add(world, this.body);

      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        imageMode(CENTER);
        
        // strokeWeight(3);
        fill(255,0,255); 
        ellipse(0,0,this.r,this.r);       
        pop();
      }

}