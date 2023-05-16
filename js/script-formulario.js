
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