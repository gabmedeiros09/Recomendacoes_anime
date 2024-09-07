//console.log(dados);
function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
    console.log(section);
    
    for(let dado of dados) {
        section.innerHTML += `
    <div class="item-resultado">
        <h2>
         <a href="#" target= "_blank">${dado.titulo}</a>
         </h2>
        <p class="descricao-meta">${dado.sinopse}</p>
        <h3>Onde assistir:</h3>
        <a href=${dado.link}target="blank"> Streaming</a>
        <section>
            <h4>Onde comprar a obra:</h4>
            <a href=${dado.link2} target="blank"> Amazon </a>
        </section>
    </div>
    `;
    
    }
    
    


}

