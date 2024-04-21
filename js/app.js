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
    embaralharLista(amigosAdicionados);//lista já embaralhada

    //chamei a tela do sorteio para poder exibir os nomes sorteados
    let sorteio = document.getElementById('lista-sorteio');

   //Este é um loop for que itera (percorre) sobre os elementos do lista
    for (i = 0; i < amigosAdicionados.length; i++)
        
    // se i for igual ao todos o elementos da lista, vai aparecer na tela que o ultimo nome saiu como amigo secreto do primeiro nome, o índice [0] da array
    if (i == amigosAdicionados.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigosAdicionados[i] + '-->' + amigosAdicionados[0] + '<br>';
    } else { //Se o i ainda não for igual todos os elementos da lista, vai aparecer na tela o nome em que o i está sendo igual, e esse nome vai ver amigo secreto do proximo nome [i + 1]
        sorteio.innerHTML = sorteio.innerHTML + amigosAdicionados[i] + '-->' + amigosAdicionados[i + 1] + '<br>';
    }
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

//função para embaralhar a lista de amigos
function embaralharLista(amigosAdicionados) {
    for (let i = amigosAdicionados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosAdicionados[i], amigosAdicionados[j]] = [amigosAdicionados[j], amigosAdicionados[i]];
    }
    console.log(amigosAdicionados);
    return amigosAdicionados;
} 

// document.getElementById('adicionar').setAttribute('disabled', 'true'); // Desabilita o botão "Adicionar" no início

// document.getElementById('nome-amigo').addEventListener('input', function() {
//   document.getElementById('adicionar').setAttribute('disabled', 'false'); // Habilita o botão "Adicionar" quando começa a digitar
// });
