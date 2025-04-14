// Função responsável por realizar a pesquisa com base no campo de entrada
function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa, remove espaços extras e converte para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    // Seleciona o botão "Voltar"
    let botaoVoltar = document.getElementById("botao-voltar");

    // Se o campo estiver vazio, exibe mensagem de erro e mostra o botão voltar
    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        botaoVoltar.style.display = "block";
        return;
    }

    // Variável para armazenar os resultados filtrados
    let resultados = "";

    // Percorre cada item da lista "dados" (deve estar definida no escopo global)
    for (let dado of dados) {
        // Divide o título, descrição e tags em palavras minúsculas
        let tituloPalavras = dado.titulo.toLowerCase().split(/\s+/);
        let descricaoPalavras = dado.descricao.toLowerCase().split(/\s+/);
        let tagsPalavras = dado.tags.toLowerCase().split(/\s+/);

        // Verifica se o termo pesquisado aparece em qualquer um dos campos
        if (tituloPalavras.includes(campoPesquisa) ||
            descricaoPalavras.includes(campoPesquisa) ||
            tagsPalavras.includes(campoPesquisa)) {
            
            // Adiciona o resultado ao HTML a ser exibido
            resultados += `  
            <div class="item-resultado">  
                <h2>  
                    <a href="#" target="_blank">${dado.titulo}</a>  
                </h2>  
                <p class="descricao-meta">${dado.descricao}</p>  
                <a href="${dado.link}" target="_blank">Mais informações</a>  
            </div>  
            `;
        }
    }

    // Se não houver nenhum resultado correspondente, mostra a mensagem padrão
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Insere os resultados na seção e exibe o botão "Voltar"
    section.innerHTML = resultados;
    botaoVoltar.style.display = "block";
}

// Função que limpa os resultados e o campo de pesquisa, escondendo o botão "Voltar"
function voltarParaInicio() {
    document.getElementById("resultados-pesquisa").innerHTML = "";
    document.getElementById("campo-pesquisa").value = "";
    document.getElementById("botao-voltar").style.display = "none";
}

// Adiciona funcionalidade de "Enter" para acionar a pesquisa no campo de texto
document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão (ex: submissão de formulário)
        pesquisar(); // Executa a função de pesquisa
    }
});

// Registra o Service Worker para funcionamento como PWA (Progressive Web App)
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("js/sw.js")
};
