
function Drop(x, y,mira,equipo) {
    this.x = x+17;
    this.y = y+17;
    this.mira=mira;
    this.toDelete = false;
    this.equipo=equipo;

    this.show = function() {
        noStroke();
        fill(150, 0, 255);
        rect(this.x, this.y,5,5);
    }

    this.evaporate = function() {
        this.toDelete = true;
    }

    this.hits = function(muro) {
        var x1=muro.x+40;
        var y2=muro.y+40;
        if((this.x>=muro.x && this.x<=x1)&&(this.y>=muro.y && this.y <= y2)){
            return true;
        }
        else return false;

    }

    this.move = function() {
       if(mira==="right"){
           this.x = this.x +7;
           this.y = this.y +0;
       }
       else if(mira==="left"){
           this.x = this.x +-7;
           this.y = this.y +0;
       }
       else if(mira==="up"){
           this.x = this.x +0;
           this.y = this.y +-7;
       }
       else if(mira==="down"){
           this.x = this.x +0;
           this.y = this.y +7;
       }

    }

}