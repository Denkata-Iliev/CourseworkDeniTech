const username = document.getElementById("name");
const nameError = document.getElementById("name-error");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const comment = document.getElementById("comment");
const commentError = document.getElementById("comment-error");

const form = document.getElementById("form");

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

form.addEventListener("submit", function (event) {
    validateForm(event);
});

function validateForm(event) {
    if (validateUsername() && validateEmail() && validateComment()) {
        let name = document.getElementById("name").value;
        let message = name + ", Вие успешно изпратихте коментара си! Благодарим Ви за обратната връзка!";
        alert(message);
    } else {
        event.preventDefault();
        alert("Моля, проверете дали сте въвели коректно всички полета!");
    }
}

username.addEventListener("blur", validateUsername);
email.addEventListener("blur", validateEmail);
comment.addEventListener("blur", validateComment);

function validateUsername() {
    if (username.value.length < 3) {
        nameError.style.color = "red";
        nameError.innerHTML = "Името трябва да съдържа поне 3 символа!"
        return false;
    } else {
        nameError.innerHTML = "";
        return true;
    }
}

function validateEmail() {
    if (!emailRegex.test(email.value)) {
        emailError.style.color = "red";
        emailError.innerHTML = "Имейлът трябва да бъде в следния формат: example@example.com";
        return false;
    } else {
        emailError.innerHTML = "";
        return true;
    }
}

function validateComment() {
    if (comment.value.length < 10) {
        commentError.style.color = "red";
        commentError.innerHTML = "Коментарът трябва да съдържа поне 10 символа!"
        return false;
    } else {
        commentError.innerHTML = "";
        return true;
    }
}