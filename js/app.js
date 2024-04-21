//abre a pagina com foco no campo: digite nome de um amigo
document.getElementById('nome-amigo').focus();

//exclui a lista de sugestão quando clica na caixa do Nome do Amigo
document.getElementById('nome-amigo').setAttribute('autocomplete', 'off');


//listas
let amigosAdicionados = []

//trazer elementos, valores, textos do HTML
function adicionar() {
    
    //aqui é o campo para digitar o nome do amigo e ele irá para a lista de amigos
    let digitarNomeDoAmigo = document.getElementById('nome-amigo').value;
    let nomeAmigo = digitarNomeDoAmigo.toUpperCase();
    
    //Verifica se o amigo digitado já foi adicionado à lista
    if (amigosAdicionados.some(nome => nome.toUpperCase() === nomeAmigo)) {
        alert('Esse amigo já foi adicionado!')//msg de que o amigo ja foi adicionado
        document.getElementById('nome-amigo').value = '';//depois da msg acima, apaga o campo 'nome-amigo'
        return;
    }

    //condição para caso nao tenha nada digitado no campo principal, não aconteça nada ao clicar em adicionar
    if (digitarNomeDoAmigo) {
    amigosAdicionados.push(nomeAmigo);
    document.getElementById('lista-amigos').innerText = amigosAdicionados.join(', ');
    document.getElementById('nome-amigo').value = ''; //apaga todo o campo depois de clicar enter
    console.log(amigosAdicionados);
    } else {
        // Não há código aqui, então nada acontecerá se a variável estiver vazia, nula ou indefinida.
    }

}

//funcao para sortear os nomes digitados no campo principal
function sortear() {
    embaralharLista(amigosAdicionados);//lista já embaralhada

    //chamei a tela do sorteio para poder exibir os nomes sorteados
    let sorteio = document.getElementById('lista-sorteio');
    
    //se a quantidade de amigos for inferior a 4 pessoas, o sorteio não vai rolar
    if (amigosAdicionados.length >= 4) {
       
        //Este é um loop for que itera (percorre) sobre os elementos do lista
        for (i = 0; i < amigosAdicionados.length; i++)
        
            // se i for igual ao todos o elementos da lista, vai aparecer na tela que o ultimo nome saiu como amigo secreto do primeiro nome, o índice [0] da array
            if (i == amigosAdicionados.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigosAdicionados[i] + '-->' + amigosAdicionados[0] + '<br>';
                } else { //Se o i ainda não for igual todos os elementos da lista, vai aparecer na tela o nome em que o i está sendo igual, e esse nome vai ver amigo secreto do proximo nome [i + 1]
                    sorteio.innerHTML = sorteio.innerHTML + amigosAdicionados[i] + '-->' + amigosAdicionados[i + 1] + '<br>';
                        }
        } else {
            alert('A quantidade de amigos é insuficiente');//mensagem informando que o número de pessoas é menor que 4 pessoas.
        }
    }

//reinicia tudo
// Adicione um manipulador de evento ao botão "Reiniciar"
document.getElementById('reiniciar').addEventListener('click', function() {
    // Recarrega a página
    window.location.reload();
  });

//funções da tecla enter
document.addEventListener('keyup', function(teclar) {
    if (teclar.key === 'Enter') {
        teclar.preventDefault(); // Evita o comportamento padrão de submissão do formulário (evita atualizar a pagina

        // caso a campo principal 'Digite nome de um amigo' esteja vazio, o botão adicionar não vai funcionar, passando a interação pro btao sortear
        if (document.getElementById('nome-amigo').value == '' && document.getElementById('lista-sorteio').innerHTML == '') {
        sortear(); //sorteia os nomes
        } else if (document.getElementById('nome-amigo').value == '' && document.getElementById('lista-sorteio').innerHTML) {
            document.getElementById('lista-sorteio').innerHTML = '';
            sortear();
        } else {
            adicionar();//adiciona o amigo digitado no campo 'amigos incluidos'
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

// Adicione um manipulador de evento ao botão "Reiniciar"
document.getElementById('reiniciar').addEventListener('click', function() {
    // Recarrega a página
    window.location.reload();
  });