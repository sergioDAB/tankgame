

function Enemy(x, y, l) {
    this.x = x;
    this.y = y;
    this.nivel = l;
    this.vida = 4-l; // si es mas rapido, mas nivel, menos vida
    this.xdir = 0;
    this.ydir = 0;
    this.speed = l;
    this.apunta="right";
    this.contador=0;
    this.cdisparo=51;
    this.disparo=false;
    this.mov=1;

    this.herir = function() {
        this.vida-=1;
    }

    this.disparar =function () {
        if(this.cdisparo===0){
            this.disparo=true;
        }
    }

    this.actualizar = function() {
        this.cdisparo-=1;
        if(this.contador===0){// genera otro movimiento despues de 50 ciclos
            this.mov=Math.floor(Math.random()*(1-5)+5);
            this.contador=50;
        }

        if(this.mov===1){
            if(this.x <= 40){
                this.xdir = 0;
                this.ydir =0;
                this.apunta="left";
                this.contador-=1;
            }
            else{
                this.xdir = -this.speed;
                this.ydir =0;
                this.apunta="left";
                this.contador-=1;
            }
        }
        else if(this.mov===2){
            if(this.y <= 40){
                this.ydir = 0;
                this.xdir =0;
                this.apunta="up";
                this.contador-=1;
            }
            else{
                this.ydir = -this.speed;
                this.xdir =0;
                this.apunta="up";
                this.contador-=1;
            }
        }
        else if(this.mov===3){
            if(this.x >= 520){
                this.xdir = 0;
                this.ydir = 0;
                this.apunta="right";
                this.contador-=1;
            }
            else{
                this.xdir = this.speed;
                this.ydir =0;
                this.apunta="right";
                this.contador-=1;
            }
        }
        else if(this.mov===4){
            if(this.y >= 520){
                this.ydir = 0; // no hace nada
                this.xdir = 0;
                this.apunta="down";
                this.contador-=1;
            }
            else{
                this.ydir = this.speed;
                this.xdir =0;
                this.apunta="down";
                this.contador-=1;
            }
        }
        this.contador-=1;
    }

    this.move = function() {
        this.x += this.xdir;
        this.y += this.ydir;
    }

    this.show = function() {
        noStroke(); // para que no se le dibujen los bordes
        //fill(288,288,60,60);
        //rect(this.x, this.y,40,40);
        if(this.nivel===1){                              // nivel 1
            fill(218,227,13,80);
            rect(this.x, this.y,40,40);
            if(this.apunta==="right"){
                rect(this.x+15, this.y+15, 30,10); //cañon
                rect(this.x-5, this.y, 50,10);     //rueda
                rect(this.x-5, this.y+30, 50,10); //rueda
            }
            else if(this.apunta==="left"){
                rect(this.x-5, this.y+15, 30,10);
                rect(this.x-5, this.y, 50,10);
                rect(this.x-5, this.y+30, 50,10);
            }
            else if(this.apunta==="up"){
                rect(this.x+15, this.y-5, 10,30);
                rect(this.x, this.y-5, 10,50);
                rect(this.x+30, this.y-5, 10,50);
            }
            else if(this.apunta==="down"){
                rect(this.x+15, this.y+15, 10,30);
                rect(this.x, this.y-5, 10,50);
                rect(this.x+30, this.y-5, 10,50);
            }
        }
        else if(this.nivel===2){                         //nivel 2
            fill(13,32,227,80);
            rect(this.x, this.y,40,40);
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
        else if(this.nivel===3){                    // nivel 3
            fill(227,45,13,80);
            rect(this.x, this.y,40,40);
            if(this.apunta==="right"){
                rect(this.x+15, this.y+15, 40,10);
                rect(this.x-10, this.y, 50,10);
                rect(this.x-10, this.y+30, 50,10);
            }
            else if(this.apunta==="left"){
                rect(this.x-20, this.y+15, 40,10);
                rect(this.x-10, this.y, 60,10);
                rect(this.x-10, this.y+30, 60,10);
            }
            else if(this.apunta==="up"){
                rect(this.x+15, this.y-20, 10,40);
                rect(this.x, this.y-10, 10,60);
                rect(this.x+30, this.y-10, 10,60);
            }
            else if(this.apunta==="down"){
                rect(this.x+15, this.y+15, 10,40);
                rect(this.x, this.y-10, 10,60);
                rect(this.x+30, this.y-10, 10,60);
            }
        }

    }
}