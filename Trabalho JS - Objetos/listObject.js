
//EXERCÍCIO 2
var vet = [];
function exerc02(){
    var pizza = new Object();
    pizza.idade = document.getElementById("idade").value;
    pizza.filhos = document.getElementById("filhos").value;
    pizza.sexo = document.getElementById("sexo").value;
    pizza.salario = document.getElementById("salario").value;
    pizza.rg = document.getElementById("rg").value;
    // insere pizza no vetor 
    vet.push(pizza);
    document.getElementById("r2").innerHTML = "Cidadão com RG nº " + pizza.rg + " inserido com sucesso";
}
function item1(){
    var i;
    var soma = 0;
    for(i=0;i<vet.length;i++){
        soma =  soma + Number(vet[i].salario);
    }
    document.getElementById("item1").innerHTML = "A média salarial da população é " + soma / vet.length;
}
function item2(){
    var i;
    var soma = 0;
    for(i=0;i<vet.length;i++){
        soma = soma + Number(vet[i].filhos);
    }
    document.getElementById("item2").innerHTML = "A media de filhos da populaçao é " + soma / vet.length;
}
function item3(){
    var i;
    var maior = [0];
    for(i=0;i<vet.length;i++){
        if(vet[i].salario > maior){
            maior = vet[i].salario;
        }
    }
    document.getElementById("item3").innerHTML = "O maior salario é R$ " + maior;
}
function item4(){
    var i;
    var conta = 0;
    for(i=0;i<vet.length;i++){
        if((vet[i].sexo == "F") && (vet[i].salario > 1000)){
            conta++;
        }
    }
    document.getElementById("item4").innerHTML = "A porcentagem de mulheres que recebem mais que R$ 1000,00 é " + conta/vet.length*100 + "%";
}
function hide2(){
    var x = document.getElementById("exerc2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCÍCIO 3
var vet = [];
function cadastra(){
    var objeto = new Object();
    objeto.sexo3 = document.getElementById("sexo3").value;
    objeto.olhos = document.getElementById("olhos").value;
    objeto.altura3 = document.getElementById("altura3").value;
    objeto.idade3 = document.getElementById("idade3").value;
     
    vet.push(objeto);
    document.getElementById("aviso3").innerHTML = "Inserido com sucesso";
}
function item1exerc3(){
    var i;
    var soma = 0;
    var qtde = 0;
    for(i=0;i<vet.length;i++){
        if((vet[i].olhos == "C") && (vet[i].altura3 > 1.60)){
            soma = soma + Number(vet[i].idade3);
            qtde++;//quantidade = quantidade + 1
        }
    }
    document.getElementById("item1exerc3").innerHTML = "Resultado: " + soma/qtde;
}
function item2exerc3(){
    var i;
    var maior = [0];
    for(i=0;i<vet.length;i++){
        if(vet[i].idade3 > maior){
            maior = vet[i].idade3;
        }
    }
    document.getElementById("item2exerc3").innerHTML = "A maior idade é " + maior;
}
function item3exerc3(){
    var i;
    var qtde = 0;
    for(i=0;i<vet.length;i++){
        if(((vet[i].sexo3 == "F") && (20 < vet[i].idade3 <= 45)) || ((vet[i].olhos == "V") && (vet[i].altura3 < 1.70))){
            qtde++;
        }
    }
    document.getElementById("item3exerc3").innerHTML = qtde;
}
function item4exerc3(){
    var i;
    var calc = 0;
    for(i=0;i<vet.length;i++){
        if(vet[i].sexo3 == "M"){
            calc++;
        }
    }
    document.getElementById("item4exerc3").innerHTML = "A porcentagem de homens é " + calc/vet.length*100 + "%";
}
function hide3(){
    var x = document.getElementById("exerc3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCICIO 4
var vet = [];
function cadastra4(){
    var i;
    for(i=0;i<5;i++){
    var objeto = new Object();  
    objeto.nome4 = document.getElementById("nome4").value;  
    objeto.sexo4 = document.getElementById("sexo4").value;
    objeto.idade4 = document.getElementById("idade4").value;
    objeto.renda4 = document.getElementById("renda4").value;
    objeto.filhos4 = document.getElementById("filhos4").value;
    vet.push(objeto);
    objeto.maiorI = 0;
    document.getElementById("R4").innerHTML = "Cadastro realizado com sucesso";
    }

}

function media4(){
    var i;
    var somaSal = 0;
    for(i=0;i<vet.length;i++){
        somaSal = somaSal + parseFloat(vet[i].renda4);
    }
    document.getElementById("R4").innerHTML = "A media de salario da populaçao pesquisada é R$" + somaSal / vet .length;
}
function maiorIdade4(){
    var i;
    var maior = vet[0].idade4;
    var posicao4 = 0;
    for(i=0;i<vet.length;i++){
        if(vet[i].idade4 > maior){
            maior = vet[i].idade4;
            posicao4 = i;
        }    
    }
    document.getElementById("R4").innerHTML = "A maior da idade é do(a) " + vet[posicao4].nome4 + " com " + maior +" anos";
}

function menorIdade4(){
    var i;
    var menor = vet[0].idade4;
    var posicao4 = 0;
    for(i=0;i<vet.length;i++){
        if(vet[i].idade4 < menor){
            menor = vet[i].idade4;
            posicao4 = i;
        }
    }
    document.getElementById("R4").innerHTML = "A menor da idade é do(a) " + vet[posicao4].nome4 + " com " + menor +" anos";;
}
function baixaRenda4(){
    var i;
    var popVulneravel = 0;
    for(i=0;i<vet.length;i++){
        if((vet[i].sexo4 === 'F') && (vet[i].filhos4 > 2) && (vet[i].renda4 < 600)){
            popVulneravel = popVulneravel + 1;        
        }
    }
    document.getElementById("R4").innerHTML = popVulneravel;
}
function hide4(){
    var x = document.getElementById("exerc4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCICIO 5
function exerc05(){
    var objeto = new Object();
    objeto.codigo5 = document.getElementById("codigo5").value;
    objeto.qtde5 = document.getElementById("qtde5").value;
    objeto.valor5 = document.getElementById("valor5").value;
    objeto.descricao5 = document.getElementById("descricao5").value;
    vet.push(objeto)
    document.getElementById("r5").innerHTML = objeto.codigo5 + " Inserido com sucesso";
    //chama a ordenação
    ordena();
}
function ordena(){
    var vet = [];
    var aux = new Object();
    for(i=0;i<vet.length;i++){
        for(j=i+1;j<vet.length;j++){
            if(vet[i].codigo5 > vet[i].codigo5){
                aux = vet[i];
                vet[i] = vet[j];
                vet[j] = aux;
            }
        }
    }
//mostra resultado
    mostra();
}
function mostra(){
    for(var i=0;i< vet.length;i++){
        alert("\n" + vet[i].codigo5);
    }
}
function altera(){
    var objeto = new Object();
    objeto.qtde5 = document.getElementById("qtde5").value;
    objeto.valor5 = document.getElementById("valor5").value;
    objeto.descricao5 = document.getElementById("descricao5").value; 

    for(var i=0;i< vet.length;i++){
        if (vet[i].codigo5 == objeto.codigo5){
            vet[i] = objeto;
            document.getElementById("altera5").innerHTML =
            "Alterado com sucesso";
            break;
        }
    }
    if ( i == vet.length){
        document.getElementById("altera5").innerHTML = " Elemento não encontrado";
    }
}

function mostraLetra(){
    var letra5 = document.getElementById("letra5").value;
    var saida = "";
    for(var i=0;i< vet.length;i++){
        if (vet[i].descricao5.charAt(0) == letra5){
            saida += vet[i].descricao5 + "<br/>";
        }
    }
    document.getElementById("mostraLetra5").innerHTML = saida;
}

function estoque(){
    var saida = "";
    var limpa = "";
    for(var i=0;i< vet.length;i++){
        if (vet[i].qtde5 < 5){
            saida += vet[i].descricao5 + "<br/>";
        }
    }
    document.getElementById("mostraLetra").innerHTML = saida;
    saida = limpa
}   
function hide5(){
    var x = document.getElementById("exerc5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCÍCIO 6
var cl = [];
var co = [];
function cadastroCliente(){
    var objeto = new Object();
    objeto.nCliente = Number(document.getElementById("nCliente").value);
    objeto.nomeCliente = document.getElementById("nomeCliente").value;
    objeto.telCliente = document.getElementById("telCliente").value;
    objeto.endCliente = document.getElementById("endCliente").value;
    cl.push(objeto);
    document.getElementById("aviso1").innerHTML = "<br>" + "<br>Cadastrado com sucesso";
}
function cadastroConta(){
    var objeto = new Object();
    var x = Number(document.getElementById("numCliente").value);
    for(var i = 0; i<cl.length;i++){
        if(x == cl[i].nCliente){
            objeto.numCliente = document.getElementById("numCliente").value;
            objeto.numConta = document.getElementById("numConta").value;
            objeto.saldo = document.getElementById("saldo").value;
            co.push(objeto);
            document.getElementById("aviso2").innerHTML = "<br><br>Cadastrado com sucesso";
        }
        else{
            alert("Cliente inserido não está cadastrado no sistema");
        }
    }
}
function consulta(){
    document.getElementById("contas").innerHTML = "";
    var result = "";
    for(var i = 0;i<co.length;i++){
        result += "<br><br>Número da conta: " + co[i].numConta + "<br>Número do cliente: " + co[i].numCliente + "<br>Saldo: " + co[i].saldo +"<br>";
    }
    document.getElementById("contas").innerHTML = result;
}

function hide6(){
    var x = document.getElementById("exerc6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// EXERCÍCIO 7
var cl = [];
var co = [];
function cadastroCliente07(){
    var objeto = new Object();
    var x = false;
    var i;
    objeto.numCliente7 = Number(document.getElementById("numCliente7").value);
    objeto.nomeCliente7 = document.getElementById("nomeCliente7").value; 
    for(i=0;i<cl.length;i++){
        if(cl[i].numCliente7 === objeto.numCliente7){
            x = true;
        }  
    }
    if( x === true){
        alert(objeto.numCliente7 + " já foi cadastrado");
    }
    else{
        cl.push(objeto);  
        document.getElementById("aviso4").innerHTML = "<br><br>" + objeto.numCliente7 + " Cadastrado com sucesso";
    }
}
function cadastroConta07(){
    var y = Number(document.getElementById("codCliente7").value);
    var objeto = new Object();
    for(var i = 0; i<cl.length;i++){
        if(y === cl[i].numCliente7){
            objeto.numConta7 = Number(document.getElementById("numConta7").value);
            objeto.valorCompra7 = document.getElementById("valorCompra7").value;
            objeto.codCliente7 = Number(document.getElementById("codCliente7").value);
            co.push(objeto);
            document.getElementById("aviso5").innerHTML = "<br><br>" + objeto.codCliente7 + " Cadastrado com sucesso";
        }
        else{
            alert("Cliente inserido não está cadastrado no sistema");
        }
    }
}
function removerCliente07(){
    var k = Number(document.getElementById("numCliente7").value);
    var l = Number(document.getElementById("codCliente7").value);
    for(var i=0;i<cl.length;i++){
        if(k === l){
            document.getElementById("aviso6").innerHTML = "<br><br>" + "Exclusão não permitida";
        }
        else{
            for(var i=0;i<cl.length;i++){
                var busca = cl.indexOf(k)
                cl.splice(busca, 1)
                document.getElementById("aviso6").innerHTML = "<br><br>" + "Cliente removido com sucesso";
            }
        }
    }
}
function hide7(){
    var x = document.getElementById("exerc7");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCÍCIO 8
var vet = [];
function cadastroVeiculos(){
    var objeto = new Object()
    objeto.estado = document.getElementById("estado").value;
    objeto.numVeiculos = document.getElementById("numVeiculos").value;
    objeto.numAcidentes = document.getElementById("numAcidentes").value;
    vet.push(objeto)
    document.getElementById("aviso7").innerHTML = "<br><br>" + "Informações inseridas com sucesso";
}
function exerc08_item1(){
    var maiorAcidente = vet[0].numAcidentes;
    var menorAcidente = vet[0].numAcidentes;
    var posicaoMaior = 0;
    var posicaoMenor = 0;
    for(i=1;i<vet.length;i++){
        if (vet[i].numAcidentes > maiorAcidente){
            maiorAcidente = vet[i].numAcidentes;
            posicaoMaior = i;
        }
    }
    for(i=1;i<vet.length;i++){
        if (vet[i].numAcidentes < menorAcidente){
            menorAcidente = vet[i].numAcidentes;
            posicaoMenor = i;
        }
    }
    document.getElementById("exerc08_item1").innerHTML = "<br><br>" + "O estado " + vet[posicaoMaior].estado + " teve o maior índice de acidentes, " + maiorAcidente + "." + "<br>" + "O estado " + vet[posicaoMenor].estado + " teve o menor índice de acidentes, " + menorAcidente + ".";
}
function exerc08_item2(){
    var calcula = "";
    var posicao = 0;
    for(i=0;i<vet.length;i++){
        posicao = i;
        calcula += vet[posicao].estado + " - " + vet[i].numVeiculos + " veículos. "  + "<br>"; 
    }
    document.getElementById("exerc08_item2").innerHTML = calcula;
}
function exerc08_item3(){
    var calcula = "";
    var posicao1 = 0;
    for(i=0;i<vet.length;i++){
        posicao1 = i;
        calcula += vet[posicao1].estado + " - " + vet[i].numAcidentes + " acidentes. "  + "<br>"; 
    }
    document.getElementById("exerc08_item3").innerHTML = calcula;
}
function hide8(){
    var x = document.getElementById("exerc8");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCÍCIO 9
var vet = [];
function exerc09(){
    var objeto = new Object()
    objeto.nomeFunc = document.getElementById("nomeFunc").value;
    objeto.salario9 = document.getElementById("salario9").value;
    objeto.comissao = document.getElementById("comissao").value;
    objeto.vendas = document.getElementById("vendas").value;
    vet.push(objeto)
    document.getElementById("aviso8").innerHTML = "<br><br>" + "Informações de " + objeto.nomeFunc + " inseridas com sucesso.";
}
function calcula09(){
    var calcula = "";
    var posicao2 = 0;
    for(i=0;i<vet.length;i++){
        posicao2 = i
        calculaComissao = Number(vet[posicao2].comissao/100)*Number(vet[posicao2].vendas) + Number(vet[posicao2].salario9);
        calcula += vet[posicao2].nomeFunc + " tem direito a " + vet[posicao2].comissao + "% de comissão" + " sobre suas " + vet[posicao2].vendas + " vendas. Seu salário é de R$" + Number(vet[posicao2].salario9) + ". Portanto, com a comissão será R$" +  calculaComissao + "." +"<br><br>";
    }
    document.getElementById("r9").innerHTML = "<br>" + calcula;
}
function hide9(){
    var x = document.getElementById("exerc9");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCICIO 11
var vet = [];
var i;
function cadastramed(){
    var medico = new Object();
    medico.codigoMed = document.getElementById("codMedico").value;
    medico.nomeMed = document.getElementById("nomeMedico").value;
    medico.endMed = document.getElementById("enderecoMedico").value;
    medico.pagMed = document.getElementById("salMedico").value;
    vet.push(objeto);
    document.getElementById("r11").innerHTML = "Cadastro do medico com sucesso";
}
function consultamed(){
    var i;
	var acumula = " ";
	for(i=0; i < vet.length; i++){ 
		acumula = acumula + vet[i] + "<br/> ";
	}
	document.getElementById("resultado11").innerHTML = acumula;
}
function cadastrapac(){
    var paciente = new Object();
    paciente.codigoPac = document.getElementById("codPaciente").value;
    paciente.nomePac = document.getElementById("nomePaciente").value;
    paciente.endPac = document.getElementById("enderecoPaciente").value;
    paciente.idadePac = document.getElementById("idadePaciente").value;
    vet.push(objeto);
    document.getElementById("r11").innerHTML = "Cadastro do  com paciente com sucesso";
}
function cadastracons(){
    var paciente = new Object();
    paciente.numPront = document.getElementById("numprontuario").value;
    paciente.dataConsulta= document.getElementById("dataConsulta").value;
    paciente.diagnostico = document.getElementById("diagConsulta").value;
    paciente.codMed = document.getElementById("codMed").value;
    paciente.codPac = document.getElementById("codpac").value;
    vet.push(objeto);
    document.getElementById("r11").innerHTML = "Cadastro da consulta com sucesso";
}
function hide11(){
    var x = document.getElementById("exerc11");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//EXERCICIO 20
var vet = [];
function cadastra20(){
    var objeto = new Object();
    objeto.numero = document.getElementById("os").value;
    objeto.data = document.getElementById("data").value;
    objeto.valor20 = document.getElementById("valor20").value;
    objeto.tipoServivo = document.getElementById("servico").value;
    objeto.nome20 = document.getElementById("nome20").value; 
    vet.push(objeto);
    document.getElementById("resposta").innerHTML = "Inserção com sucesso";
}
function media20(){
    var i;
    var media = 0;
    for(i=0;i<vet.length;i++){
        media = media + parseFloat(vet[i].valor20);
    }
    document.getElementById("resposta").innerHTML = "A media dos valores recebidos pela oficina foi R$" + media / vet.length;
}
function caro(){
    var i;
    var posicao20 = 0;
    var caro = vet[0].valor20;
    for(i=0;i<vet.length;i++){
        if(vet[i].valor20 > caro){
            caro = vet[i].valor20;
            posicao20 = i;
        }    
    }
    document.getElementById("resposta").innerHTML = "O serviço mais caro foi do cliente: " + vet[posicao20].nome20 + " que custou " + caro +" reais. Fazendo o serviço: " + vet[posicao20].tipoServivo + " na data " + vet[posicao20].data;
    
}
function hide20(){
    var x = document.getElementById("exerc20");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}