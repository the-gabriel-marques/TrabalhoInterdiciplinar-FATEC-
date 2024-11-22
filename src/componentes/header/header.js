const header = document.getElementById('header')
header.innerHTML = `
<nav class="nav-bar_mobile">     
            <div class="list_content_mobile" id="list_content_mobile">
                <div class="icone_fechar" id="close">
                    <div class="line1 line"></div>
                    <div class="line2 line"></div>
                </div>
                <div class="list_content">
                <button id="materiais">Materiais</button>
                <a href="/">Produtos</a>
                <a href="/">Produção</a>
                <a href="/">Produção</a>
                <button id="SejaCatadorBTN_mobile">Seja um Associado</button>
                </div>
            </div>
        </nav>
        <div class="empresa_nome_mobile">
            <a href="./index.html">
                <img src="/src/componentes/header/img/titulo.png" alt="">
            </a>
        </div>
        <div class="icone" id="open">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>  
        <nav class="nav-bar">
            <div class="lista-navigation">
                <ul>

                    <div class="empresa_nome">
                        <a href="./index.html">
                            <img src="/src/componentes/header/img/titulo.png" alt="">
                        </a>
                    </div>
                    <div class="esquerda-header">
                        <li><a href="/src/componentes/Materiais/materiais.html">Materiais</a></li>
                        <li><a href="/src/componentes/produtos/produtos.html">Produtos</a></li>
                    </div>
                    <div class="direita-header">
                        <li><a href="/">Dados</a></li>
                        <li><a href="/">Produção</a></li>
                        <li><button id="SejaCatadorBTN_desktop">Seja um Associado</button></li>
                    </div>
                </ul>
            </div>
        </nav>
`

document.getElementById("materiais").addEventListener("click", function () {
    window.location.href = "src/componentes/Materiais/materiais.html";
});

const openbtn = document.getElementById('open')
const closebtn=document.getElementById('close')
openbtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-left:-0%; transition:1s;'
    container.style = "z-index: 4;"
    openbtn.style = 'display:none;'
})
closebtn.addEventListener('click',()=>{
    const content=document.getElementById('list_content_mobile');
    const container=document.querySelector(".nav-bar_mobile")
    content.style = 'margin-left:-60%; transition:1s;'
    container.style = "z-index: 3;"
    openbtn.style = 'display:inline; transition:2s;'
})