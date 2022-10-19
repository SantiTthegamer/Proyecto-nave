class Disparo {
    constructor(x,y){
var options = {isStatic:true}
this.body = Bodies.rectangle(x,y,options)
this.image = loadImage("imagenes/disparo.png");
World.add(world,this.body);
    }

    shoot (){
var  newAngle = nave.angle -28;
new angle = newAngle * (3.14/180)
var velocity = p5.Vector.fromeAngle(newAngle);
velocity.mult(0.5);
 Matter.Body.setStatic(this.body,false)
Matter.Body.setVelocity(this.body,{x:velocity.x * (180/3.14),y:velocity.y * (180/3.14)})
    }

    display (){
        var pos = this.body.position;
        push()
        imageMode(CENTER)
        image(this.image,pos.x,pos.y);
        pop()
    }
}
