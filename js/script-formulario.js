
function selecionarTipoCadastro(){
				
    var cadastroPf = document.getElementById('cadastro-pf');
    var cadastroPj = document.getElementById('cadastro-pj');
    var pessoaFisica = document.getElementById('pessoa-fisica');
    var pessoaJuridica = document.getElementById('pessoa-juridica');
    
    if(cadastroPf.checked){
        pessoaFisica.style.display = 'block';
        pessoaJuridica.style.display = 'none';
        limpaStatus();
    }
    else if(cadastroPj.checked){
        pessoaFisica.style.display = 'none';
        pessoaJuridica.style.display = 'block';
        limpaStatus();
    } 

}
function limparCampos(){
            
    document.getElementById('nome').value = "";
    document.getElementById('cpf').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('celular').value = "";  
    document.getElementById('email').value = "";
    document.getElementById('nome-fantasia').value = "";
    document.getElementById('razao-social').value = "";
    document.getElementById('cnpj').value = "";
    document.getElementById('check-informacoes-mail').checked = false;
    document.getElementById('check-notificacoes-celular').checked = false;
    limpaStatus();

}
function limpaStatus(){
			
    document.getElementById('status-nome').innerHTML = "";
    document.getElementById('status-cpf').innerHTML = "";
    document.getElementById('status-telefone').innerHTML = "";
    document.getElementById('status-celular').innerHTML = "";
    document.getElementById('status-email').innerHTML = "";
    document.getElementById('status-nome-fantasia').innerHTML = "";
    document.getElementById('status-razao-social').innerHTML = "";
    document.getElementById('status-cnpj').innerHTML = "";

}

function validarFormulario(){
			
    var valida = true;
    var confirma = true;
    
    /*confirma = confirm("Deseja cadastrar as informações");
    if(!confirma) 
        valida = false;*/

    if(confirma){

        let nome  = document.getElementById('nome');
        let statusNome = document.getElementById('status-nome');
        let cpf = document.getElementById('cpf');
        let statusCpf = document.getElementById('status-cpf');
        
        let nomeFantasia  = document.getElementById('nome-fantasia');
        let statusNomeFantasia = document.getElementById('status-nome-fantasia');
        let razaoSocial  = document.getElementById('razao-social');
        let statusRazaoSocial = document.getElementById('status-razao-social');
        let cnpj = document.getElementById('cnpj');
        let statusCnpj = document.getElementById('status-cnpj');
        
        let telefone = document.getElementById('telefone');
        let statusTelefone = document.getElementById('status-telefone');
        let celular = document.getElementById('celular');
        let statusCelular = document.getElementById('status-celular');
        let email = document.getElementById('email');
        let statusEmail = document.getElementById('status-email');

        let informacoesEmail = document.getElementById('check-informacoes-mail');
        let notificacoesCelular = document.getElementById('check-notificacoes-celular');
        
        let cadastroPf = document.getElementById('cadastro-pf');
        let cadastroPj = document.getElementById('cadastro-pj');
 
        let nomeObrigatorio = 'Nome é obrigatório!';
        let cpfObrigatorio = 'CPF é obrigatório!';
        let cpfInvalido = 'CPF Inválido!';
        let nomeFantasiaObrigatorio = 'Nome Fantasia é obrigatório!';
        let razaoSocialObrigatorio = 'Razão Social é obrigatória!';
        let cnpjObrigatorio = 'CNPJ é obrigatório!';
        let cnpjInvalido = 'CNPJ inválido!';
        let telefoneInvalido = 'Formato de telefone é inválido!';
        let celularInvalido = 'Formato de celular é inválido!';
        let emailInvalido = 'Formato de e-mail é inválido!';
        let contatoObrigatorio = 'É obrigatório pelo menos uma forma de contato! (Telefone, Celular ou E-mail)';
        
        limpaStatus();
        
        if(cadastroPf.checked){
        
            if(nome.value === ""){
                statusNome.innerHTML = nomeObrigatorio;
                valida = false;
            }
            
            if(cpf.value === ""){
                statusCpf.innerHTML = cpfObrigatorio;
                valida = false;
            }
            else{
                if(!validaCpf(cpf.value)){
                    statusCpf.innerHTML = cpfInvalido;
                    valida = false;
                }
            }
        }
        else if(cadastroPj.checked){
        
            if(nomeFantasia.value === ""){
                statusNomeFantasia.innerHTML = nomeFantasiaObrigatorio;
                valida = false;
            }
            if(razaoSocial.value === ""){
                statusRazaoSocial.innerHTML = razaoSocialObrigatorio;
                valida = false;
            }
            if(cnpj.value === ""){
                statusCnpj.innerHTML = cnpjObrigatorio;
                valida = false;
            }
            else{
                if(!validaCnpj(cnpj.value)){
                    statusCnpj.innerHTML = cnpjInvalido;
                    valida = false;
                }
            }
        
        }
        if(((telefone.value === "") && (celular.value === "")) && (email.value === "")){
            
            statusTelefone.innerHTML = contatoObrigatorio;
            statusCelular.innerHTML = contatoObrigatorio;
            statusEmail.innerHTML = contatoObrigatorio;
            valida = false;
        }
        else{
            if(telefone.value !== ""){
                if(!validaTelefone(telefone.value)){
                    statusTelefone.innerHTML = telefoneInvalido;
                    valida = false;
                }
            }
            if(celular.value !== ""){
                if(!validaCelular(celular.value)){
                    statusCelular.innerHTML = celularInvalido;
                    valida = false;
                }
            }
            if(email.value !== ""){
                if(!validaEmail(email.value)){
                    statusEmail.innerHTML = emailInvalido;
                    valida = false;
                }
            }
        }

        if(valida){

            console.log("informacoesEmail.value: " + informacoesEmail.checked);
            console.log("notificacoesCelular.value: " + notificacoesCelular.checked);
            sessionStorage.setItem('cadastroPf', cadastroPf.checked);
            sessionStorage.setItem('cadastroPj', cadastroPj.checked);
            sessionStorage.setItem('nome', nome.value);
            sessionStorage.setItem('cpf', cpf.value);
            sessionStorage.setItem('nomeFantasia', nomeFantasia.value);
            sessionStorage.setItem('razaoSocial', razaoSocial.value);
            sessionStorage.setItem('cnpj', cnpj.value);
            sessionStorage.setItem('telefone', telefone.value);
            sessionStorage.setItem('celular', celular.value);
            sessionStorage.setItem('email', email.value);
            sessionStorage.setItem('informacoesEmail', informacoesEmail.checked);
            sessionStorage.setItem('notificacoesCelular', notificacoesCelular.checked);
            sessionStorage.setItem('formulario', 'enviando');

        }
    }
    return valida;
}
function carregarInformacoes(){

    if(sessionStorage.getItem('formulario') === 'enviando'){
        window.location.href = 'enviando.html';
    }
    
    let cadastroPf = sessionStorage.getItem('cadastroPf');
    let cadastroPj = sessionStorage.getItem('cadastroPj');
    let nome = sessionStorage.getItem('nome');
    let cpf = sessionStorage.getItem('cpf');
    let nomeFantasia = sessionStorage.getItem('nomeFantasia');
    let razaoSocial = sessionStorage.getItem('razaoSocial');
    let cnpj = sessionStorage.getItem('cnpj');
    let telefone = sessionStorage.getItem('telefone');
    let celular = sessionStorage.getItem('celular',);
    let email = sessionStorage.getItem('email');
    let informacoesEmail = sessionStorage.getItem('informacoesEmail');
    let notificacoesCelular = sessionStorage.getItem('notificacoesCelular');

    let formCadastro = document.getElementById('form-cadastro');
    let htmlConsulta = `   
    <h3 class="label-consulta">Cliente Cadastrado</h3>
    <label class="label-consulta">Tipo de Cadastro: ` + (cadastroPf == "true" ? "Pessoa Física" : "Pessoa Jurídica") + `</label>`;
    if(cadastroPf == "true"){
        htmlConsulta +=`
        <label class="label-consulta">Nome: ` + nome + `</label>
        <label class="label-consulta">CPF: ` + cpf + `</label>`;
    }
    else if(cadastroPj == "true"){
        htmlConsulta +=`
        <label class="label-consulta">Nome Fantasia: ` + nomeFantasia + `</label>
        <label class="label-consulta">Razão Social: ` + razaoSocial + `</label>
        <label class="label-consulta">CNPJ: ` + cnpj + `</label>`;
    }
    htmlConsulta +=`
    <label class="label-consulta">Telefone: ` + telefone + `</label>
    <label class="label-consulta">Celular: ` + celular + `</label>
    <label class="label-consulta">E-Mail: ` + email + `</label>
    <label class="label-consulta">Cliente autoriza envio de informações por E-mail: ` + (informacoesEmail == "true" ? "Sim" : "Não") + `</label>
    <label class="label-consulta">Cliente autoriza envio de notificações por Mensagem/Celular: ` + (notificacoesCelular == "true" ? "Sim" : "Não") + `</label>
    <hr class="barra-horizontal"/>
    <input type="button" value="Novo Cadastro" id="novo-cadastro" class="botao-form" onclick="novoCadastro();"/>`;

    console.log("informacoesEmail: " + informacoesEmail);
    console.log("notificacoesCelular: " + notificacoesCelular);

    formCadastro.innerHTML = htmlConsulta;

}
function novoCadastro(){
    sessionStorage.setItem('formulario', '');
    window.location.href = 'cadastro.html';
}
/*
if(valida){
            var formularioCadastro = document.getElementById('form-cadastro');
            var formularioConsulta = document.getElementById('form-consulta');
            formularioCadastro.style.display = 'none';
            formularioConsulta.style.display = 'block';
            if(cadastroPf.checked){
                document.getElementById('label-nome').innerHTML = "Nome: " + nome.value;
                document.getElementById('label-cpf').innerHTML = "CPF: " + cpf.value;
            }
            else if(cadastroPj.checked){
                document.getElementById('label-nome-fantasia').innerHTML = "Nome Fantasia: " + nomeFantasia.value;
                document.getElementById('label-razao-social').innerHTML = "Razão Social: " + razaoSocial.value;
                document.getElementById('label-cnpj').innerHTML = "CNPJ: " + cnpj.value;
            }
            document.getElementById('label-telefone').innerHTML = "Telefone: " + telefone.value;
            document.getElementById('label-celular').innerHTML = "Celular: " + celular.value;
            document.getElementById('label-email').innerHTML = "E-mail: " + email.value;
            var autoriza = document.getElementById('autorizacao').checked;
            var resultado = "";
            if(autoriza){
                resultado = "Sim";
            }
            else{
                resultado = "Não";
            }
            document.getElementById('label-autorizacao').innerHTML = 'Cliente autoriza envio de informações por E-mail: ' + resultado;
            valida = false;
        }
*/

function validaCelular(celular){
    var res = celular.match(/[\(][0-9]{2}[\)][9][0-9]{4}[\-][0-9]{4}$/g);
    if(res === null)
        return false;
    else
        return true;
}
function validaTelefone(telefone){
    var res = telefone.match(/[\(][0-9]{2}[\)][0-9]{4}[\-][0-9]{4}$/g);
    if(res === null)
        return false;
    else
        return true;
}
function validaEmail(email){
    var res = email.match(/^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$/g);
    if(res === null)
        return false;
    else
        return true;
}
function validaCpf(cpf){
    
    cpf = cpf.toString();
    cpf = cpf.replace(/[^0-9]/g, '');
    
    if(cpf.length != 11)
        return false;
        
    var rep = 0;
    for(var r = 0; r < 10; r++){
        if(cpf.substr(r,1) === cpf.substr(10,1))
            rep += 1;
        if(rep === 10)
            return false;
    }
        
    var soma = 0;
    var valida = false;
    var peso_mult1 = [10,9,8,7,6,5,4,3,2];
    var peso_mult2 = [11,10,9,8,7,6,5,4,3,2];
        
    for(var i = 0; i < 9; i++)
        soma += peso_mult1[i] * parseInt(cpf.substr(i,1));
        
    var resto = soma % 11;
    if(resto < 2)
        resto = 0;
    else
        resto = 11 - resto;
        
    var digito = resto.toString();
    var parc_cpf = cpf.substr(0,9) + digito;
    soma = 0;
        
    for(var j = 0; j < 10; j++)
        soma += peso_mult2[j] * parseInt(parc_cpf.substr(j,1));
        
    resto = soma % 11;
    if(resto < 2)
        resto = 0;
    else
        resto = 11 - resto;
        
    digito += resto.toString();
    if(cpf.substr(9,2) === digito)
        valida = true;

    return valida;
}
function validaCnpj(cnpj){

    cnpj = cnpj.toString();
    cnpj = cnpj.replace(/[^0-9]/g, '');
        
    if(cnpj.length != 14){
        return false;
    }
        
    var rep = 0;
    for(var r = 0; r < 13; r++){
        if(cnpj.substr(r,1) === cnpj.substr(13,1)){
            rep += 1;
        }
        if(rep === 13){
            return false;
        }
    }
        
    var soma = 0;
    var valida = false;
    var peso_mult1 = [5,4,3,2,9,8,7,6,5,4,3,2];
    var peso_mult2 = [6,5,4,3,2,9,8,7,6,5,4,3,2];
        
    for(var i = 0; i < 12; i++){
        soma += peso_mult1[i] * parseInt(cnpj.substr(i,1));
    }

    var resto = soma % 11;
    if(resto < 2){
        resto = 0;
    }
    else{
        resto = 11 - resto;
    }
        
    var digito = resto.toString();
    var parc_cnpj = cnpj.substr(0,12) + digito;
    soma = 0;
        
    for(var j = 0; j < 13; j++){
        soma += peso_mult2[j] * parseInt(parc_cnpj.substr(j,1));
    }
        
    resto = soma % 11;
    if(resto < 2){
        resto = 0;
    }
    else{
        resto = 11 - resto;
    }
        
    digito += resto.toString();
    if(cnpj.substr(12,2) === digito){
        valida = true;
    }
    return valida;
}
function mascaraTelefone(){
    var telefone = document.getElementById('telefone').value;
    telefone = telefone.toString();
    telefone = telefone.replace(/[^0-9]/g, '');
    var mascara = "(" + telefone.substring(0,2) + ")";
    mascara += telefone.substring(2,6) + "-";
    mascara += telefone.substring(6,10);
    if(mascara.replace(/[^0-9]/g, '') !== ""){
        document.getElementById('telefone').value = mascara;
    }
    else{
        document.getElementById('telefone').value = "";
    }
}
function mascaraCelular(){
    var celular = document.getElementById('celular').value;
    celular = celular.toString();
    celular = celular.replace(/[^0-9]/g, '');
    var mascara = "(" + celular.substring(0,2) + ")";
    mascara += celular.substring(2,7) + "-";
    mascara += celular.substring(7,11);
    document.getElementById('celular').value = mascara;
    if(mascara.replace(/[^0-9]/g, '') !== ""){
        document.getElementById('celular').value = mascara;
    }
    else{
        document.getElementById('celular').value = "";
    }
}
function mascaraCpf(){
    var cpf = document.getElementById('cpf').value;
    cpf = cpf.toString();
    cpf = cpf.replace(/[^0-9]/g, '');
    var mascara = cpf.substring(0,3) + ".";
    mascara += cpf.substring(3,6) + ".";
    mascara += cpf.substring(6,9)+ "-";
    mascara += cpf.substring(9,11);
    document.getElementById('cpf').value = mascara;
    if(mascara.replace(/[^0-9]/g, '') !== ""){
        document.getElementById('cpf').value = mascara;
    }
    else{
        document.getElementById('cpf').value = "";
    }
}
function mascaraCnpj(){
    var cnpj = document.getElementById('cnpj').value;
    cnpj = cnpj.toString();
    cnpj = cnpj.replace(/[^0-9]/g, '');
    var mascara = cnpj.substring(0,2) + ".";
    mascara += cnpj.substring(2,5) + ".";
    mascara += cnpj.substring(5,8)+ "/";
    mascara += cnpj.substring(8,12) + "-";
    mascara += cnpj.substring(12,14);
    document.getElementById('cnpj').value = mascara;
    if(mascara.replace(/[^0-9]/g, '') !== ""){
        document.getElementById('cnpj').value = mascara;
    }
    else{
        document.getElementById('cnpj').value = "";
    }
}
/* ===== Função de tempo ======= */
function sleep(miliseconds){
    var start = new Date().getTime();
    while(true){
        if((new Date().getTime() - start) > miliseconds){
            break;
        }
    }
} 