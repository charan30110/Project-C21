class Ground
{
    constructor(x, y, w, h){
      let options = {
        isStatic : true  
      }
      this.Body = Bodies.rectangle(x,y,w,h,options);
      this.x = x
      this.y = y
      this.w = w
      this.h = h

      World.add(world,this.Body)
     }
  display(){
    var pos = this.Body.position
    push();
    rectMode(CENTER);
    stroke(225);
    fill(100);
    rect(pos.x,pos.y,this.w,this.h) ;
    Body.visible = true
    pop();
  }

}