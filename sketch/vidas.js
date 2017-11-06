function verVidas() {
    var vidas=tanke.vida;
    if(vidas===3)
        document.getElementById("p1").innerHTML = "3";
    else if(vidas===2)
        document.getElementById("p1").innerHTML = "2";
    else if(vidas===1)
        document.getElementById("p1").innerHTML = "1";
    else if(vidas===0)
        document.getElementById("p1").innerHTML = "0";
}