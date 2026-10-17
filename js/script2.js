function showName(){
    const name = sessionStorage.getItem("name")
    name === null ? document.getElementById("salute").textContent="No hay datos guardados" : document.getElementById("salute").textContent=`Hola, ${name}`
}

function clearName(){
    sessionStorage.removeItem("name")
    showName()
}

document.addEventListener("DOMContentLoaded", showName)
document.getElementById("clear").addEventListener("click", clearName)