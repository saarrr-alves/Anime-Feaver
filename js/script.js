function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    let botaoVoltar = document.getElementById("botao-voltar");
    
    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        botaoVoltar.style.display = "block";
        return;
    }
    
    let resultados = "";
    
    for (let dado of dados) {
        let tituloPalavras = dado.titulo.toLowerCase().split(/\s+/);
        let descricaoPalavras = dado.descricao.toLowerCase().split(/\s+/);
        let tagsPalavras = dado.tags.toLowerCase().split(/\s+/);
        
        if (tituloPalavras.includes(campoPesquisa) ||
            descricaoPalavras.includes(campoPesquisa) ||
            tagsPalavras.includes(campoPesquisa)) {
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
    
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }
    
    section.innerHTML = resultados;
    botaoVoltar.style.display = "block";
    
}

function voltarParaInicio() {
    document.getElementById("resultados-pesquisa").innerHTML = "";
    document.getElementById("campo-pesquisa").value = "";
    document.getElementById("botao-voltar").style.display = "none";
}

document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        pesquisar();
    }
});

// para o PWA
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
};