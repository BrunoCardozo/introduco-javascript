var botao_Adicionar = document.querySelector("#adicionar-paciente");
botao_Adicionar.addEventListener("click",eventoBotao);

function eventoBotao(event){
  event.preventDefault(); //evita que recarregue a página, limpe o console e envie o form

  //captura dos dados do form
  var form     = document.querySelector("form");
  var paciente = obtemPacienteDoFormulario(form);

  //validação do paciente

  var erros = validaPaciente(paciente); //erros é um array
  console.log(erros);

  if (erros.length > 0) //se houve um erro
  {
    exibeMensagensDeErro(erros);
    return;
  }

  pacienteTr = montaTr(paciente);

  //adicionar o tr a tabela (tbody)
  var corpoTabela = document.querySelector("#tabela-pacientes");
  corpoTabela.appendChild(pacienteTr);

  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
}

function obtemPacienteDoFormulario(form)
{
  //cria um objeto paciente
  var paciente = {
    nome:    form.nome.value,
    peso:    form.peso.value,
    altura:  form.altura.value,
    gordura: form.gordura.value,
    imc:     calculaImc(form.peso.value,form.altura.value)
  }

  return paciente;
}

function montaTr(paciente)
{
    //criação de novos elementos

  var novoPaciente = document.createElement("tr");
  novoPaciente.classList.add("paciente");



  var nomeNovoPaciente    = montaTd(paciente.nome,"info-nome");
  var pesoNovoPaciente    = montaTd(paciente.peso,"info-peso");
  var alturaNovoPaciente  = montaTd(paciente.altura,"info-altura");
  var gorduraNovoPaciente = montaTd(paciente.gordura,"info-gordura");
  var imcNovoPaciente     = montaTd(paciente.imc,"info-imc");

  //colocando os tds como filhos do tr de novo paciente

  novoPaciente.appendChild(nomeNovoPaciente);
  novoPaciente.appendChild(pesoNovoPaciente);
  novoPaciente.appendChild(alturaNovoPaciente);
  novoPaciente.appendChild(gorduraNovoPaciente);
  novoPaciente.appendChild(imcNovoPaciente);

  return novoPaciente;
}

function montaTd(dado,classe)
{
  var td = document.createElement("td");
  td.textContent   = dado;
  td.classList.add = classe;

  return td;
}

function validaPaciente(paciente)
{
  var arrayErros = [];

  if( paciente.nome.length == 0 )
  {
    arrayErros.push("O nome não pode ser em branco!");
  }

  if( paciente.gordura.length == 0 )
  {
    arrayErros.push("A gordura não pode ser em branco!");
  }

  if( paciente.peso.length == 0 )
  {
    arrayErros.push("O peso não pode ser em branco!");
  }

  if( paciente.altura.length == 0 )
  {
    arrayErros.push("A altura não pode ser em branco!");
  }

  if( !validaPeso(paciente.peso) )
  {
    arrayErros.push("O peso é inválido!");
  }

  if( !validaAltura(paciente.altura) )
  {
    arrayErros.push("A altura é inválida!");
  }

  return arrayErros;
}

function exibeMensagensDeErro(erros)
{
  var ul = document.querySelector("#mensagens-erro");

  ul.innerHTML = "";

  for( var i = 0 ; i < erros.length ; i++ )
  {
    var li = document.createElement("li");
    li.textContent = erros[i];
    ul.appendChild(li);
  }
}
