var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",eventoTabela);

function eventoTabela(event)
{
  var alvoEvento = event.target;
  var paiDoAlvo  = alvoEvento.parentNode; //é a tr e não a td

  paiDoAlvo.classList.add("fadeOut");

  setTimeout( function(){
  	paiDoAlvo.remove();
  } , 500 );

}

/*
var pacientes = document.querySelectorAll(".paciente");

//adiciona um escutador de eventos em cada uma das linhas da tabela, possibilitando a remoção
for( var i = 0 ; i < pacientes.length ; i++ )
{
  pacientes[i].addEventListener("dblclick",funcao_remocao);
}

function funcao_remocao()
{
  this.remove();
}
*/
