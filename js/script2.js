function showName(){
    const name = localStorage.getItem("name")
    const city = localStorage.getItem("city")

    console.log(name)
    console.log(city)

    if (name==null && city==null){
        document.getElementById("salute").textContent="No hay datos guardados"
    } else {
        document.getElementById("salute").textContent=`Hola, ${name} de ${city}`
    }

}

function clearName(){
    localStorage.clear()
    showName()
}

document.addEventListener("DOMContentLoaded", showName)
document.getElementById("clear").addEventListener("click", clearName)