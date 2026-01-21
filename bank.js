let form = document.getElementById("loginform");
let userId = document.getElementById("userid");
let password = document.getElementById("password");
let userError = document.getElementById("userError");
let passError = document.getElementById("passError");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    userError.textContent = "";
    passError.textContent = "";

    let isValid = true;

    if (userId.value.trim() === "") {
        userError.textContent = "User ID cannot be empty";
        isValid = false;
    } else if (userId.value.length < 4) {
        userError.textContent = "User ID must be at least 4 characters";
        isValid = false;
    }

    if (password.value.trim() === "") {
        passError.textContent = "Password cannot be empty";
        isValid = false;
    } else if (password.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Login validation successful");
    }

});