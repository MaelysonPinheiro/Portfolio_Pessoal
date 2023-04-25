var showM = document.querySelector('.projetos1');
var cabecalho = document.getElementById('#cabecalho')


function showMessage(){
    showM.style.display = "flex"
    document.getElementById("btn").textContent="Ver Menos"
}
function hideMessage(){
    showM.style.display = "none"
    document.getElementById("btn").textContent="Ver Mais"
}
