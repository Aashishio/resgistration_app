const login = document.querySelector('.login'),
create = document.querySelector('.create'),
container = document.querySelector('.container'),
btn = document.querySelector('.signup .inputBox #st');

usrname = document.getElementById("usrname").value;
snpusrname = document.getElementById("snpusrname").value;
password = document.getElementById("password").value;
snppass = document.getElementById("snppass").value;
ent = document.getElementById("ent").value;

login.addEventListener(("click"), ()  => {
    container.classList.add('signinform');
});

create.onclick = function () {
    container.classList.remove('signinform');
};

function f2() {
    if (password.type == 'password') {
        password.type = 'text';
        e2.style.display = 'block';
        eye.style.display = 'none';
    }
}

function f3() {
    if (password.type == 'text') {
        password.type = 'password';
        e2.style.display = 'none';
        eye.style.display = 'block';
    }
}
function he(){
    if (ent == password) {
        localStorage.setItem("userName", usrname);
        localStorage.setItem("password", ent);
        console.log(usrname);
        console.log(password);
        console.log(ent);
    } else {
        alert("Your password is entered wrongly!!");
    };
}