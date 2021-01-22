class Box {
  constructor(x, y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x, y, 40, 60, options);
      this.width = 40;
      this.height = 60;
      this.visibility=255
      
      
      World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;
      var angle =this.body.angle

      push();
      if (this.body.speed < 3) {
          rectMode(CENTER);
          translate(pos.x, pos.y);
        rotate(angle)
         
          
          
          
          rect(0, 0, this.width, this.height);
          pop();
      } else {
          push();
          World.remove(world, this.body);
          this.visibility = this.visibility - 10;
          


          pop();
      }


    
    }
    
score(){
  if(this.visibility<0 && this.visibility>-105){
    score++
}

}
}
