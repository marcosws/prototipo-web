
function validarLogin(){

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login === 'Admin' && senha === 'admin123'){
        sessionStorage.setItem('logado', true);
        return true;
    }
    else{
        document.getElementById('label-login-erro').innerHTML = 'Login ou senha inválidos!';
        return false;
    }
}
function logadoOK(){
    if(!sessionStorage.getItem('logado'))
        window.location.href = 'index.html';
}