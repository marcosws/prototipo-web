
function validarLogin(){

    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login === 'Admin' && senha === 'admin123'){
        sessionStorage.setItem('logado', true);
        return true;
    }
    else if(login === '' && senha === ''){
        document.getElementById('label-login-erro').innerHTML = 'Entre com o login e senha!';
        return false;
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

function formularioEnviadoOK(){
    if(sessionStorage.getItem('formulario') === 'enviando')
        window.location.href = 'enviar.html';
    else if(sessionStorage.getItem('formulario') !== 'enviado')
         window.location.href = 'cadastro.html';
}

function logout(){
    sessionStorage.removeItem('logado');
    window.location.href = 'index.html';
}