function save(){
    const inputName = document.getElementById("name").value
    const inputCity = document.getElementById("city").value
    
    if (inputName == '' || inputCity == ''){
        alert("Los campos son requeridos")
        return
    }
    
    localStorage.setItem("name", inputName)
    localStorage.setItem("city", inputCity)
    window.location.href="page2.html"
}

document.getElementById("save").addEventListener("click", save)