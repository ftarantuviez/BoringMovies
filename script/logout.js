let $logoutButton = document.getElementById('logout-button');
let $logoutName = document.getElementById('logout-name');
let $logoutEmail = document.getElementById('logout-email');
let $logoutPassword = document.getElementById('logout-password');
let $logoutForm = document.getElementById('logout-form');

$logoutButton.addEventListener('click', ()=>{
    let nameNewUser = $logoutName.value;
    let emailNewUser = $logoutEmail.value;
    let passwordNewUser = $logoutPassword.value;

    if(passwordNewUser.length < 8) alert('Password has to have 8 or more characters')
    else $logoutForm.action = 'index.html';
});