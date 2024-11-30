const createAccountButton = document.querySelector(".button");
let isValid = false;

function validatePassword() {
    const passwordField = document.querySelector("#password");
    const confirmPasswordField = document.querySelector("#confirm-password");
    const errorMessage = document.querySelector(".error-message");

    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    if (password && confirmPassword && password === confirmPassword) {
        isValid = true;
    }
    else {
        passwordField.classList.add("invalid");
        confirmPasswordField.classList.add("invalid");
        errorMessage.classList.add("error");
    }
}

createAccountButton.addEventListener("click", (event) => {
    validatePassword();
    if (!isValid)
        event.preventDefault();
});

/*
Psuedocode

CREATE a function (validatePassword)
    IF content of password field and confirm password fields aren't the same,
        ADD invalid class to password field and confirm password field
        ADD error class to error-message span text
CREATE click event listener to the create account button
    CALL validatePassword function
*/

