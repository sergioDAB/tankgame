var tanke;
var pared;
var enemy;
var muros = [];
var drops = [];
var enemis=[];
var objetivos=[];
var r,r2,x,y;
var nivel;
var tipoObjetivo;
var nm2;
var global;
var objetivo;
var contEnemigos=200;
var nuevoE;

function setup(nm) {

    if(nm===30) global=1;
    else if(nm===40) global=2;
    else if(nm===50) global=3;
    nm2=nm;
    createCanvas(600, 600);
    tanke = new Tanke();
    pared = new Muro();
    enemy = new Enemy();
    objetivo=new Objetivo();

    for (var i = 0; i < nm; i++) { // se crean los muros
        r=Math.floor(Math.random()*(0-15)+15);
        r2=Math.floor(Math.random()*(0-15)+15);
        muros[i] = new Muro(r*40, r2*40); // recibe dos eje X,Y
    }

    for(var i=0; i< nm/6; i++){ // se crean los enemigos
        x=Math.floor(Math.random()*(0-15)+15);
        y=Math.floor(Math.random()*(1-15)+15);
        nivel=Math.floor(Math.random()*(1-4)+4);
        enemis[i] = new Enemy(x*40, y*40,nivel);
    }

    for(var i=0; i< nm/3; i++){// se crean los objetivos
        x=Math.floor(Math.random()*(0-15)+15);
        y=Math.floor(Math.random()*(1-15)+15);
        tipoObjetivo=Math.floor(Math.random()*(1-3)+3);
        objetivos[i] = new Objetivo(x*40, y*40,tipoObjetivo);
        objetivos[i].setvida();
    }
}

function draw() {

    background(51);
    tanke.show();
    verVidas();
    tanke.move();

    //agregar enemigos cada cierto tiempo
    contEnemigos-=1;
    if(contEnemigos <= 0 && enemis.length <= nm2/6){
        x=Math.floor(Math.random()*(0-15)+15);
        y=Math.floor(Math.random()*(1-15)+15);
        nivel=Math.floor(Math.random()*(1-4)+4);
        nuevoE = new Enemy(x*40, y*40,nivel);
        enemis.push(nuevoE);
        contEnemigos=200;
    }

    for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();

        if(drops[i].x<=0 ||drops[i].x>=600 || drops[i].y<=0 || drops[i].y>=600){//si se sale de los limites
            drops[i].evaporate();
        }

        for (var j = 0; j < muros.length; j++) { // solo mis balas derriban muros
            if(drops[i].equipo==="buenos"){
                if (drops[i].hits(muros[j])) {
                    muros[j].destruir();
                    drops[i].evaporate();
                }
            }
            else{
                if (drops[i].hits(muros[j])) {
                    drops[i].evaporate();
                }
            }
        }

        for (var j = 0; j < enemis.length; j++) { // si las balas mias mgolpean un tanke
            if(drops[i].equipo==="buenos"){
                if (drops[i].hits(enemis[j])) {
                    enemis[j].herir();
                    drops[i].evaporate();
                }
            }
        }
        if(drops[i].equipo==="malos"){// si las balas me golpean
            if(drops[i].hits(tanke)){
                tanke.matar();
                drops[i].evaporate();
                tanke.aviso();
            }
        }
        for (var j = 0; j < objetivos.length; j++) { // si las balas mias golpean un objetivo
            if(drops[i].equipo==="buenos"){
                if (drops[i].hits(objetivos[j])) {
                    objetivos[j].destruir();
                    drops[i].evaporate();
                }
            }
            else{
                if (drops[i].hits(objetivos[j])) drops[i].evaporate();
            }
        }
    }
// se muestran los muros, los enemigos y los objetivos
    for (var i = 0; i < muros.length; i++) { //muestra los muros
        muros[i].show();
    }

    for (var i = 0; i < enemis.length; i++){//actualiza los enemigos e indica si mpover o disparar
        enemis[i].move();
        enemis[i].actualizar();
        enemis[i].show();
    }


    for (var i = 0; i < objetivos.length; i++){
        objetivos[i].show();
    }
    // se eliminan de las listas los objetos sin vida

    for (var i = drops.length-1; i >= 0; i--) { // borra las balas que chocaron
        if (drops[i].toDelete) {
            drops.splice(i, 1);
        }
    }
    for (var i = muros.length-1; i >= 0; i--) { // si un muro esta sin vida se elimina
        if (muros[i].vida===0) {
            muros.splice(i, 1);
        }
    }
    for (var i = objetivos.length-1; i >= 0; i--) { // si un objetivo esta sin vida se elimina
        if (objetivos[i].vida===0) {
            objetivos.splice(i, 1);
        }
    }

    for (var i = enemis.length-1; i >= 0; i--) { // eliminar enemigos
        if (enemis[i].vida===0) {
            enemis.splice(i, 1);
        }
    }


    for(var i=0; i< enemis.length; i++){ // si cada enemigo dispara se guarda la bala
        enemis[i].disparar();
        if(enemis[i].disparo){
            var drop = new Drop(enemis[i].x, enemis[i].y,enemis[i].apunta,"malos");
            drops.push(drop);
            enemis[i].cdisparo=enemy.cdisparo;
            enemis[i].disparo=false;
        }
    }

    if(objetivos.length===0 && global === 1){
        alert("PASAR AL NIVEL 2");
        setup(40);

    }
    else if(objetivos.length===0 && global === 2){
        alert("PASAR AL NIVEL 3");
        setup(50);

    }
    if(objetivos.length===0 && global === 3){
        alert("FELICITACIONES !!!!!  El juego se reiniciará");
        global=0;
        setup(30);
    }
}

function keyReleased() {
    if (key != ' ') {
        tanke.setDir(0,0,tanke.apunta);
    }
}

function keyPressed() {
    if (key === ' ') {
        var drop = new Drop(tanke.x, tanke.y,tanke.apunta,"buenos");
        drops.push(drop);
    }

    else if (keyCode === RIGHT_ARROW) {
        if(tanke.x>=560 && tanke.x <= 600){
            tanke.setDir(0,0,"right");
        }
        else tanke.setDir(1,0,"right");
    }
    else if (keyCode === LEFT_ARROW) {
        if(tanke.x>=0 && tanke.x <= 10){
            tanke.setDir(0,0,"left");
        }
        else tanke.setDir(-1,0,"left");
    }
    else if (keyCode === UP_ARROW) {
        if(tanke.y>=0 && tanke.y <= 10){
            tanke.setDir(0,0,"up");
        }
        else tanke.setDir(0,-1,"up");
    }
    else if (keyCode === DOWN_ARROW) {
        if(tanke.y>=560 && tanke.y <= 600){
            tanke.setDir(0,0,"down");
        }
        else tanke.setDir(0,1,"down");
    }
}




