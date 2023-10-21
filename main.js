var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
var togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener('click', function () {
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
});

document.addEventListener("DOMContentLoaded", function () {

const copyPasswordButton = document.getElementById("copyPasswordButton");

    copyPasswordButton.addEventListener("click", function () {
        const passwordInput = document.getElementById("password");
        passwordInput.select();
        document.execCommand("copy");
        // Optionally provide user feedback
        alert("Password copied to clipboard!");
    });
});

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }

    if (pass.value.length < 4) {
        str.innerHTML = "Weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "Medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (pass.value.length >= 8) {
        str.innerHTML = "Strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});
