const send = () => {
    const name = document.getElementById('registerName').value;
    const lastName = document.getElementById('registerLastName').value;
    const mail = document.getElementById('registerMail').value;
    const userName = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    console.log(name + " " + lastName);
    console.log(mail);
    console.log(userName);
    console.log(password);
    console.log(confirmPassword);

    if(name === "" || lastName === "" || mail === "" || userName === "" || password === "" || confirmPassword === "") {
        swal({
            title: "Please, fill all fields",
            icon: "warning"
        });
    } if(password !== confirmPassword) {
        swal({
            title: "Passwords don't match",
            icon: "warning"
        })
    } else {
        swal({
            title: "You've been registered",
            icon: "success"
        })
        cancelFunction();
        document.getElementById('registerForm').reset()
    }
}