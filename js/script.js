function pesquisar() {
    // 1. Obter a seção de resultados
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se o campoPesquisa estiver vazio, mostra nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    // 2. Construir a lista de resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // 3. Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        descricao = dado.descricao.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        tags = dado.tags.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        // Se titulo includes campoPesquisa, então faça...
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // 4. Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // 5. Atualizar a seção de resultados
    section.innerHTML = resultados;
}
