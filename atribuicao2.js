//Selecionar os ids e classes dos inputs e guardar em constantes
//também precisa capturar o identificador para o container de
//criação do card
//exemplo: const cardTitulo = document.querySelector('#titulo')

//criar um objeto. Exemplo:
// let dados = {
//     titulo: '',
//     descricao: '',
//     urlDaImagem: ''
//   };

//validação do form, com os atributos sendo iniciados xomo verdadeiros

//Os cards estão em um array, que será iniciado vazio (pois, ao iniciarmos a página, não teremos elementos ainda). iremos ler esse array para exibir, para isso precisaremos saber o tamanho desse array. Por exemplo:
// var cards = []
// var lengthCards = cards.length

//aqui, vou criar funções para receber os valores para os nossos cards. por exemplo:
// function cardTitulo(titulo){
//     card.titulo = titulo
// }
//Assim como precisamos dos valores do título, também precisamos da imagem (url) e descrição. Logo, as funções são semelhantes, alterando os valores e nomes.

//abrindo função de criação do card
//para criar o card, também poderiam criar uma função, como a enviarDados
//A ordem da função pode ser:
//abrir a função recebendo um evento
//usar o prevent default no evento recebido
//fazer o push para o array de cards, recebendo um card
//receber os valores vazios nos elementos do card
// ex: cardTitulo.value = ''
// criar uma div, dentro de uma template string, usando o innerHTML
// exemplo: containerCardElement.innerHTML += `<div>conteúdos html do card</div>`
// podem criar a validação para que o botão esteja desabilitado caso esteja vazio

//fechando função de criação do card

//função de checagem do form
//aqui, podemos pegar os valores do objeto

//função para validação do input

//no fim, podemos capturar os eventos com addEventListener

//Documentações
//https://developer.mozilla.org/pt-BR/docs/Learn/Forms/Your_first_form
