/*

BOX SHADOW VALUES AND FUNCTIONS

*/

function clicado(){
    window.alert('escolhe logo pix e me paga seu safado')
}
    /*

nn mexe

*/

function myFunction() {
    var x = document.getElementById("myInput").value;
    document.getElementById("demo")
    if (x == "pix"){
        window.alert("chave pix")
    } else{
    alert("Você escolheu: 🛑" + x + "🛑. Escolhe pix aí meu chapa, eu nn sou um tarado, sou apenas um mercenario🤑🤑")}
  }
      /*

nn mexe

*/

var container = document.getElementById("container");
var button = document.getElementById("action-btn");

button.addEventListener("click", function(){
    var container = document.getElementById("container");
    if(container.style.display === "none"){
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }

});