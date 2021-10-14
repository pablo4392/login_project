const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const registerActivation= () => {
    registerForm.classList.add('formulary');
    registerForm.classList.remove('display-none');
    loginForm.classList.remove('formulary')
    loginForm.classList.add('display-none');    
};

const cancelFunction = () => {
    registerForm.classList.add('display-none');
    registerForm.classList.remove('formulary');
    loginForm.classList.add('formulary');
    loginForm.classList.remove('display-none');
};