const formulary = document.getElementById('registerForm');
const registerButton = document.getElementById('registerButton');
const inputs = document.querySelectorAll('#registerForm input');

const expresions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,30} [a-zA-ZÀ-ÿ\s]{1,30}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    user: /^[a-zA-Z0-9\_\-]{5,20}$/,
    password: /^.{8,30}$/
}

const fields = {
    name: false,
    email: false,
    user: false,
    password: false,
    passConfirm: false
}

const formularyValidation = (e) => {
    switch(e.target.id){
        case 'name': 
            fieldValidation(expresions.name, e.target, 'name');
        break;

        case 'email': 
            fieldValidation(expresions.mail, e.target, 'email');
        break;

        case 'user': 
            fieldValidation(expresions.user, e.target, 'user');
        break;

        case 'password': 
            fieldValidation(expresions.password, e.target, 'password');
            passwordValidation();
        break;

        case 'confirmPassword': 
            passwordValidation();
        break;
    }
}

const fieldValidation = (expresion, input, field) => {
    if(expresion.test(input.value)) {
        document.getElementById(`${field}-validation`).classList.remove('d-none');
        document.querySelector(`#${field}-validation i`).classList.remove('fa-times-circle');
        document.querySelector(`#${field}-validation i`).classList.add('fa-check-circle');
        document.getElementById(`${field}-ins`).classList.add('d-none');
        fields[field] = true;
    } else {
        document.getElementById(`${field}-validation`).classList.remove('d-none');
        document.querySelector(`#${field}-validation i`).classList.add('fa-times-circle');
        document.querySelector(`#${field}-validation i`).classList.remove('fa-check-circle');
        document.getElementById(`${field}-ins`).classList.remove('d-none');
        fields[field] = false;
    }
}

const passwordValidation = () => {
    const inputPass01 = document.getElementById('password');
    const inputPass02 = document.getElementById('confirmPassword');

    if(inputPass01.value !== inputPass02.value) {
        document.getElementById('confirm-validation').classList.remove('d-none');
        document.querySelector('#confirm-validation i').classList.add('fa-times-circle');
        document.querySelector('#confirm-validation i').classList.remove('fa-check-circle');
        document.getElementById('confirm-ins').classList.remove('d-none');
        fields['passConfirm'] = false;
    } else {
        document.getElementById('confirm-validation').classList.remove('d-none');
        document.querySelector('#confirm-validation i').classList.remove('fa-times-circle');
        document.querySelector('#confirm-validation i').classList.add('fa-check-circle');
        document.getElementById('confirm-ins').classList.add('d-none');
        fields['passConfirm'] = true
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', formularyValidation);
});

registerButton.addEventListener('click', (e) => {
    e.preventDefault()
    const terms = document.getElementById('terms');

    if(fields.name && fields.name && fields.user && fields.password && terms.checked) {
        formulary.reset();
        cancelFunction();
        swal({
            title: "You've been registred",
            icon: "success"
        })
    } else{
        swal({
            title: "Please, check all fields again",
            icon: "error"
        })
    }
});