const user = document.getElementById('user');
const password = document.getElementById('password');
const eyeButton = document.querySelector(".far");
let isPass = true;

const togglePass = () => {
    if(isPass) {
        password.setAttribute("type", "text");
        eyeButton.classList.remove('fa-eye-slash');
        eyeButton.classList.add('fa-eye');
        isPass = false;
    } else {
        password.setAttribute("type", "password");
        eyeButton.classList.remove('fa-eye');
        eyeButton.classList.add('fa-eye-slash');
        isPass = true;
    }
}

const show = () => {
    alert(user.value);
    alert(password.value)
}