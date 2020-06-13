class Box{
    constructor (x,y,width,height,color){
        var options={
            'restitution':0.4,
            'friction':2.0,
            'density':2.0

        
    }
        
        this.body=Bodies.rectangle (x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.color=color;
      World.add(world,this.body);
      
    }
     display () {
         var posi=this.body.position;
         rectMode(CENTER);
        fill (this.color);
         rect (posi.x,posi.y,this.width,this.height);
         
     }



}



