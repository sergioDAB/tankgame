function Muro(x, y) {
    this.x = x;
    this.y = y;
    this.vida=3;

    this.destruir = function() {
        this.vida-=1;
    }

    this.show = function() {
        //noStroke();
        fill(999,999,990,94);
        rect(this.x, this.y,40,40);
    }

    this.wall = function(){
        fill(999,999,990,94);

        rect(0,0,40,600);
        rect(560,0,40,600);
        rect(40,0,520,40);
        rect(40,560,520,40);
    }
}