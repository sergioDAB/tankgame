function Objetivo(x, y,tipoO) {
    this.x = x;
    this.y = y;
    this.tipo="sencillo"; //sencillo o blindado
    this.vida=2;

    this.destruir = function() {
        this.vida-=1;
    }

    this.setvida = function () {
        if(tipoO===1){
            this.vida=2;
            this.tipo="sencillo";
        }
        else if(tipoO===2){
            this.vida=4;
            this.tipo="blindado";
        }
    }
    this.show = function() {
        if(this.tipo==="sencillo"){
            noStroke();
            fill("blue");
            rect(this.x, this.y, 40, 40);
            fill("white");
            rect(this.x+10, this.y + 10, 20, 20);
        }else if (this.tipo==="blindado"){
            noStroke();
            fill("green");
            rect(this.x, this.y, 40, 40);
            fill("white");
            rect(this.x+10, this.y + 10, 20, 20);
        }

    }
}