function validar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    console.log(email, senha);
    if (email === "") {
        document.getElementById("email").classList.add("error");
    } else {
        document.getElementById("email").classList.remove("error");
    }

    if (senha ==="") {
        document.getElementById("senha").classList.add("error");
    } else {
        document.getElementById("senha").classList.remove("error");
    }
}
