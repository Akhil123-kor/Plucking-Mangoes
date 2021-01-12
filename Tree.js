class Tree{
    constructor(x, y){
        var options = {
          isStatic:true,
          restitution:0,
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.body=Bodies.rectangle(x,y,30,70,options)
        this.image = loadImage("sprites/tree.png");
        World.add(world,this.body)
    }
    display(){
        push()
        translate(pos.x,pos.y)
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height)
        pop()
        }
    }