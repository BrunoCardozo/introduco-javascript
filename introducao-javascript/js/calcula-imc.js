var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

/*console.log("O tamanho do Array é: " + pacientes.length); concatenação*/

var paciente_peso;
var paciente_altura;
var paciente_imc;
var peso;
var altura;

var alturaValida;
var pesoValido;

for( var i = 0 ; i < pacientes.length ; i++ ){

  paciente_peso   = pacientes[i].querySelector(".info-peso");
  paciente_altura = pacientes[i].querySelector(".info-altura");
  paciente_imc    = pacientes[i].querySelector(".info-imc");
  peso            = paciente_peso.textContent;
  altura          = paciente_altura.textContent;

  alturaValida = validaAltura(altura);
  pesoValido   = validaPeso(peso);

  if( !alturaValida )
  {
    alturaValida = false;
    paciente_imc.textContent = "Altura Inválida";
    pacientes[i].classList.add("paciente-invalido");
  }

  if( !pesoValido )
  {
    pesoValido = false;
    paciente_imc.textContent = "Peso Inválido!";
    pacientes[i].classList.add("paciente-invalido");
  }

  if( alturaValida && pesoValido )
  {
    var imc = calculaImc(peso,altura);
    paciente_imc.textContent = imc;
  }
}

function validaPeso(peso)
{
  if(peso >= 0 && peso <= 1000)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function validaAltura(altura)
{
  if(altura >= 0 && altura <= 3)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function calculaImc(peso,altura)
{
  var imc = 0;

  imc = peso/(altura*altura);

  return imc.toFixed(2);
}
