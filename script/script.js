function generate(){
    let a = Math.random() * 1000;
    a = a.toFixed(0);
    document.getElementById("random").innerHTML= "Random Number : " + a;
}