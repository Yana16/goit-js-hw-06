const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", submitFunction);

function submitFunction(event) {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.currentTarget;
    if (email.value === "" || password.value === "") { 
        return console.log("Please, fill all fields");
    }
    console.log('Email: ${email.value}, Password: ${password.value}');
    event.currentTarget.reset();
}

