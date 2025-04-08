graph TB
    A("User Browser"):::client
    B("index.html"):::html
    C("css/style.css"):::css
    D("js/dados.js"):::js
    E("js/script.js"):::js
    F("Bootstrap Icons"):::external

    A -->|"loads"| B
    B -->|"references"| C
    B -->|"includes"| D
    B -->|"includes"| E
    B -->|"references"| F

    click B "https://github.com/saarrr-alves/anime-feaver/blob/main/index.html"
    click C "https://github.com/saarrr-alves/anime-feaver/blob/main/css/style.css"
    click D "https://github.com/saarrr-alves/anime-feaver/blob/main/js/dados.js"
    click E "https://github.com/saarrr-alves/anime-feaver/blob/main/js/script.js"

classDef client fill:#a2d2ff,stroke:#07689f,stroke-width:2px;
classDef html fill:#f9c74f,stroke:#f9844a,stroke-width:2px;
classDef css fill:#90be6d,stroke:#43aa8b,stroke-width:2px;
classDef js fill:#f3722c,stroke:#f76c6c,stroke-width:2px;
classDef external fill:#a9def9,stroke:#1d3557,stroke-width:2px;


## Anime Feaver: Seu Guia Pessoal para o Mundo dos Animes

Já se pegou pensando "Quem é aquele personagem maneiro que usa fogo?" ou "Qual anime tem aquele protagonista que não tem poderes"? 

O Anime Feaver é o seu melhor amigo nessa jornada! 

**O que a gente fez aqui?**

Criamos um site simples e divertido pra você encontrar tudo sobre seus animes favoritos. É tipo uma Wikipédia só dos animes, mas sem tanto texto chato. 

## Como usar?

É fácil demais! 

* **Pesquise:** Digita o nome do personagem, anime ou qualquer palavra-chave que você lembrar.
* **Descubra:** A gente te mostra tudo sobre o que você pesquisou: descrição, fotos (ainda não, mas a gente tá trabalhando nisso!), e até links para saber mais.

## O que tem por baixo dos panos?

* **HTML, CSS e JavaScript:** A base de tudo. A gente usou essas linguagens para criar a página e fazer ela funcionar.
* **Bootstrap Icons:** Deixamos tudo mais bonito com esses ícones legais.

## Quer ajudar a gente a deixar o Anime Feaver ainda mais incrível?

Manda um pull request! A gente adora novas ideias e contribuições. Você pode:

* **Adicionar mais animes e personagens:** Quanto mais, melhor!
* **Deixar o site mais bonito:** Use sua criatividade para criar um design incrível.
* **Adicionar novas funções:** Que tal um sistema de favoritos ou uma seção de notícias?

## Importante:

* A gente tá começando agora, então ainda tem muita coisa pra melhorar.
* Se você encontrar algum bug ou tiver alguma sugestão, por favor, nos avise!

**Valeu por usar o Anime Feaver!** 

**Licença:**

MIT (significa que você pode usar esse código como quiser, mas não pode nos processar se algo der errado. )

**E aí, pronto para explorar o mundo dos animes com a gente?**
