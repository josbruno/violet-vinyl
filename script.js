// Seleciona todas as sections (uma para cada artista)
const secoes = document.querySelectorAll("section");

// Carrega os produtos do JSON
fetch("produtos.json")
  .then(response => response.json())
  .then(produtos => {
    produtos.forEach(produto => {
      // Encontra a section correspondente pelo nome do artista
      let id = "";
      if (produto.nome.includes("Nessa")) id = "nessa";
      if (produto.nome.includes("Ashley")) id = "ashley";
      if (produto.nome.includes("Hariel")) id = "hariel";
      if (produto.nome.includes("Peep")) id = "peep";
      if (produto.nome.includes("Lana")) id = "lana";

      const section = document.getElementById(id);
      const container = section.querySelector(".produtos");

      // Cria o card
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="comprar('${produto.nome}')">Comprar</button>
      `;

      container.appendChild(card);
    });
  });

// Função para comprar
function comprar(nome) {
  alert(`Você comprou: ${nome}`);
}
