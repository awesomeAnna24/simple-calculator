// ON CLICK EVENTS
document.querySelector("#reset").addEventListener("click", reset);
document.querySelector("#sub10").addEventListener("click", sub10);
document.querySelector("#sub7").addEventListener("click", sub7);
document.querySelector("#sub5").addEventListener("click", sub5);
document.querySelector("#zero").addEventListener("click", zero);
document.querySelector("#add2").addEventListener("click", add2);
document.querySelector("#add6").addEventListener("click", add6);
document.querySelector("#add11").addEventListener("click", add11);


// VARIABLES
let total = 0;

// FUNCTIONS
//--------Reset
function reset(){
    total = 0;
    document.querySelector(".output").textContent = total;
}
//---------Subtractions
function sub10(){
    total = total - 10;
    document.querySelector(".output").textContent = total;
}
function sub7(){
    total = total - 7;
    document.querySelector(".output").textContent = total;
}
function sub5(){
    total = total - 5;
    document.querySelector(".output").textContent = total;
}
//-----Zero 
function zero(){
    total = total + 0;
    document.querySelector(".output").textContent = total;
}
function add2(){
    total = total + 2;
    document.querySelector(".output").textContent = total;
}
function add6(){
    total = total + 6;
    document.querySelector(".output").textContent = total;
}
function add11(){
    total = total + 11;
    document.querySelector(".output").textContent = total;
}
