let dc = document.querySelector(".dc") ;


// mostra a mensagem
function showMessage(){   
   dc.style.display = "block";  
   document.getElementById("btndiv").textContent="Ver Menos"
 }
// esconde a mensagem
function hideMessage(){
  dc.style.display = "none"; 
  document.getElementById("btndiv").textContent="Ver Mais"
}