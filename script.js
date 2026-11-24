// Estrutura do fluxograma: cada etapa tem um texto e opções que apontam para a próxima etapa
const fluxograma = {
    inicio: {
        texto: "1. Quando você vai estudar para uma prova, o que prefere fazer primeiro?",
        opcoes: [
            { texto: "Ler o livro ou fazer resumos escritos", proximo: "etapa_leitura" },
            { texto: "Assistir a videoaulas ou ouvir explicações", proximo: "etapa_audio" }
        ]
    },
    etapa_leitura: {
        texto: "2. Ao fazer resumos, você gosta de usar canetas coloridas e desenhos?",
        opcoes: [
            { texto: "Sim, adoro mapas mentais e cores!", proximo: "res_visual" },
            { texto: "Não, prefiro tópicos simples e direto ao ponto.", proximo: "res_leitura" }
        ]
    },
    etapa_audio: {
        texto: "2. Enquanto ouve a explicação, você costuma fazer outra coisa?",
        opcoes: [
            { texto: "Sim, preciso rabiscar ou andar pelo quarto.", proximo: "res_cinestesico" },
            { texto: "Não, fico apenas prestando atenção no som.", proximo: "res_auditivo" }
        ]
    },
    // Resultados Finais (não possuem opções, apenas o texto final)
    res_visual: {
        texto: "Resultado: Você tem um perfil VISUAL! Aprenda usando gráficos, cores, flashcards e mapas mentais.",
        final: true
    },
    res_leitura: {
        texto: "Resultado: Você tem um perfil LEITOR/ESCRITOR! Listas, apostilas e reescrever anotações são seus pontos fortes.",
        final: true
    },
    res_cinestesico: {
        texto: "Resultado: Você tem um perfil CINESTÉSICO! Você aprende na prática, fazendo exercícios e experimentos.",
        final: true
    },
    res_auditivo: {
        texto: "Resultado: Você tem um perfil AUDITIVO! Podcasts, debates em grupo e ler em voz alta ajudam muito você.",
        final: true
    }
};

// Elementos da tela
const textoElemento = document.getElementById("texto-pergunta");
const botoesElemento = document.getElementById("area-botoes");
const caixaElemento = document.getElementById("caixa-fluxo");
const btnReiniciar = document.getElementById("btn-reiniciar");

// Função que carrega cada etapa do fluxograma
function mostrarEtapa(chaveEtapa) {
    const etapaAtual = fluxograma[chaveEtapa];
    
    // Atualiza o texto na tela
    textoElemento.innerText = etapaAtual.texto;
    
    // Limpa os botões anteriores
    botoesElemento.innerHTML = "";

    // Verifica se é o final do fluxograma
    if (etapaAtual.final) {
        caixaElemento.classList.add("resultado-final");
        btnReiniciar.style.display = "block";
    } else {
        caixaElemento.classList.remove("resultado-final");
        btnReiniciar.style.display = "none";

        // Cria um botão para cada opção disponível nessa etapa
        etapaAtual.opcoes.forEach(opcao => {
            const botao = document.createElement("button");
            botao.innerText = opcao.texto;
            botao.onclick = () => mostrarEtapa(opcao.proximo);
            botoesElemento.appendChild(botao);
        });
    }
}

// Inicia o fluxograma na primeira pergunta
function iniciarFluxo() {
    mostrarEtapa("inicio");
}

// Roda assim que a página abre
iniciarFluxo();