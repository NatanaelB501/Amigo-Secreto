//abre a pagina com foco no campo: digite nome de um amigo
document.getElementById('nome-amigo').focus();

//exclui a lista de sugestão quando clica na caixa do Nome do Amigo
document.getElementById('nome-amigo').setAttribute('autocomplete', 'off');

//quando digitar qualquer coisa no campo: digite nome de um amigo, a tecla enter é habilitada
document.getElementById('nome-amigo').addEventListener('input', function() {
    document.getElementById('adicionar').removeAttribute('disabled');
});

//listas
let amigosAdicionados = []

//trazer elementos, valores, textos do HTML
function adicionar() {
    
    //aqui é o campo para digitar o nome do amigo e ele irá para a lista de amigos
    let digitarNomeDoAmigo = document.getElementById('nome-amigo').value;
    let nomeAmigo = digitarNomeDoAmigo;

    //condição para caso nao tenha nada digitado no campo principal, não aconteça nada ao clicar em adicionar
    if (digitarNomeDoAmigo) {
    amigosAdicionados.push(nomeAmigo);
    document.getElementById('lista-amigos').innerText = amigosAdicionados.join(', ');
    document.getElementById('nome-amigo').value = ''; //apaga todo o campo depois de clicar enter
    console.log(amigosAdicionados);
    document.getElementById('adicionar').setAttribute('disabled', 'true');//desabilita o botao 'adicionar' quando o campo principal está vazio
    } else {
        // Não há código aqui, então nada acontecerá se a variável estiver vazia, nula ou indefinida.
    }

}

//funcao para sortear os nomes digitados no campo principal
function sortear() {
    document.getElementById('lista-sorteio').innerText = amigosAdicionados.join(', ');
}

//reinicia tudo
function reiniciar() {
    amigosAdicionados = [''];
    document.getElementById('lista-amigos').innerText = '';
    document.getElementById('lista-sorteio').innerText = '';
    document.getElementById('nome-amigo').focus();
}

//funções da tecla enter
document.addEventListener('keyup', function(teclar) {
    if (teclar.key === 'Enter') {
        teclar.preventDefault(); // Evita o comportamento padrão de submissão do formulário (evita atualizar a pagina

        // caso o botao adicionar esteja desabilitado, a tecla enter irá interagir com o botao sortear
        if (!document.getElementById('adicionar').hasAttribute('disabled')) {
        adicionar(); //adicio o amigo digitado na lista 'amigosAdicionados' quando aperta o enter.
        } else {
        sortear();
            }
    }
});

// document.getElementById('adicionar').setAttribute('disabled', 'true'); // Desabilita o botão "Adicionar" no início

// document.getElementById('nome-amigo').addEventListener('input', function() {
//   document.getElementById('adicionar').setAttribute('disabled', 'false'); // Habilita o botão "Adicionar" quando começa a digitar
// });
