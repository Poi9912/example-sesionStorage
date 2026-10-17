function save(){
    const inputName = document.getElementById("name").value
    sessionStorage.setItem("name", inputName)
    window.location.href="page2.html"
}

document.getElementById("save").addEventListener("click", save)