let $loginButton = document.getElementById('login-button');
let $loginEmailValue = document.getElementById('login-email');
let $loginPasswordValue = document.getElementById('login-password');
let $loginForm = document.getElementById('login-form');

$loginButton.addEventListener('click', ()=>{
    let userEmail = $loginEmailValue.value;
    let userPassword = $loginPasswordValue.value;

    if(userEmail === 'ftarantuviezz@gmail.com'){
        if(userPassword === 'Try'){
            $loginForm.action = 'index.html'
        } else{
            alert('Your password is wrong')
        }
    } else{
        alert('Your mail is wrong')
    }
});

