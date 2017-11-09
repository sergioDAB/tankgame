function Tanke() {
    this.x = 40;
    this.y = 40;
    this.xdir = 0;
    this.ydir = 0;
    this.vida=3;
    this.apunta="right";

    this.show = function() {
        //verVidas();
        fill(9,999,10,94);
        rect(this.x, this.y, 40,40);
        if(this.apunta==="right"){
            rect(this.x+15, this.y+15, 40,10);
            rect(this.x-5, this.y, 50,10);
            rect(this.x-5, this.y+30, 50,10);
        }
        else if(this.apunta==="left"){
            rect(this.x-20, this.y+15, 40,10);
            rect(this.x-5, this.y, 50,10);
            rect(this.x-5, this.y+30, 50,10);
        }
        else if(this.apunta==="up"){
            rect(this.x+15, this.y-20, 10,40);
            rect(this.x, this.y-5, 10,50);
            rect(this.x+30, this.y-5, 10,50);
        }
        else if(this.apunta==="down"){
            rect(this.x+15, this.y+15, 10,40);
            rect(this.x, this.y-5, 10,50);
            rect(this.x+30, this.y-5, 10,50);
        }
    }

    this.setDir = function(x,y,apunta) {
        this.xdir = x;
        this.ydir = y;
        this.apunta=apunta;
    }

    this.move = function() {
        this.x += this.xdir*5;
        this.y += this.ydir*5;
    }

    this.matar = function () {
        this.vida-=1;
    }
    this.aviso = function () {
        if(this.vida===0){
            alert("GAMER OVER       El juego se reiniciará!");
            setup(30);

        }
    }

}
