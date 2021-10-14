const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const registerButton = document.getElementById('registerButton');
const cancelButton = document.getElementById('cancelButton');

registerButton.addEventListener('click', (event) => {
    event.preventDefault();
    registerForm.classList.add('formulary');
    registerForm.classList.remove('display-none');
    loginForm.classList.remove('formulary')
    loginForm.classList.add('display-none');    
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    registerForm.classList.add('display-none');
    registerForm.classList.remove('formulary');
    loginForm.classList.add('formulary');
    loginForm.classList.remove('display-none');
});