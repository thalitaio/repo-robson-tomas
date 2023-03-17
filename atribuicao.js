//Captura os valores dos inputs
//Cria um objeto para armazenar os dados

let dados = {
  titulo: titulo,
  descricao: descricao,
  urlDaImagem: UrlDaImagem
};

//Função para enviar os dados

function enviarDados() {

  //Verifica se todos os campos estão preenchidos

  let todosOsCamposPreenchidos = true;
  if (!document.getElementById('Titulo').value) {
    todosOsCamposPreenchidos = false;
  }
  if (!document.getElementById('Descricao').value) {
    todosOsCamposPreenchidos = false;
  }
  if (!document.getElementById('UrlDaImagem').value) {
    todosOsCamposPreenchidos = false;
  }
  //Exibe uma mensagem de erro se todos os campos não estiverem preenchidos

  if (!todosOsCamposPreenchidos) {
    alert('Por favor, preencha todos os campos!');
    return;
  }
  //Armazena os dados na página temporariamente

  sessionStorage.setItem('dados', JSON.stringify(dados));
  tblPersons.push(person);
}

//Função para cancelar o envio
function cancelar() {
  sessionStorage.removeItem('dados');
  window.history.back();
}

//Adiciona os eventos de click nos botões

document.getElementById('enviar').addEventListener('click', enviarDados);
document.getElementById('cancelar').addEventListener('click', cancelar);
