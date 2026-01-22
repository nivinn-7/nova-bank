let form = document.getElementById("loginform");
let user = document.getElementById("userid");
let pass = document.getElementById("password");

let userErr = document.getElementById("userError");
let passErr = document.getElementById("passError");

let btn = document.getElementById("loginBtn");
let bar = document.getElementById("strengthBar");
let text = document.getElementById("strengthText");

user.addEventListener("input", function () {
    userErr.textContent = "";

    if (user.value.trim() === "") {
        userErr.textContent = "User ID cannot be empty";
    } else if (user.value.length < 4) {
        userErr.textContent = "User ID must be at least 4 characters";
    }

    check();
});

pass.addEventListener("input", function () {
    let v = pass.value;

    passErr.textContent = "";
    bar.className = "strength-bar";
    text.textContent = "";

    if (v.trim() === "") {
        passErr.textContent = "Password cannot be empty";
    } else if (v.length < 6) {
        passErr.textContent = "Password must be at least 6 characters";
        bar.classList.add("weak");
        text.textContent = "Weak password";
    } else if (v.length < 10) {
        bar.classList.add("medium");
        text.textContent = "Medium password";
    } else {
        bar.classList.add("strong");
        text.textContent = "Strong password";
    }

    check();
});

function check() {
    if (user.value.trim().length >= 4 && pass.value.trim().length >= 6) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login successful");
});

check();