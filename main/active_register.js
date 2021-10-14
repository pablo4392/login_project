const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const registerActivation= () => {
    registerForm.classList.add('formulary');
    registerForm.classList.remove('d-none');
    loginForm.classList.remove('formulary')
    loginForm.classList.add('d-none');    
};

const cancelFunction = () => {
    registerForm.classList.add('d-none');
    registerForm.classList.remove('formulary');
    loginForm.classList.add('formulary');
    loginForm.classList.remove('d-none');
};