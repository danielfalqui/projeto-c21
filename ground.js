class Ground {
    constructor(x, y, width, height) {
        var options ={
            isStatic:true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
        //adicionar this.body ao mundo
       
    }
    display(){
        var pos = this.body.position;//ok
        push()//ok
        //usar translate(pos.x,pos.y)
        translate(pos.x,pos.y);
        
        fill("white");
        rectMode(CENTER);
        // Para exibir você deve usar o rect(x,y,larg,altura) use 0 para x e 0 para y 
        rect(0,0,this.width,this.height);
        //Não usar aqui==>rectangle(pos.x,pos.y,pos.width,pos.height);
       
        pop()
    }
}