class Ground{
  constructor(x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  display(){
    push();
    rectMode(CENTER);
    stroke(225);
    fill(100);
    rect(this.x,this.y,this.w,this.h) ;
    Body.visible = true
    pop();
  }

}