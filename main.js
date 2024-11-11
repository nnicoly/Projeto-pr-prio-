let carrinho = [];
let total = 0;

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

// Função para atualizar a lista e o total do carrinho
function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('lista-carrinho');
  const totalElement = document.getElementById('total');

  listaCarrinho.innerHTML = '';
  carrinho.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item-carrinho';
    itemDiv.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerDoCarrinho(${index})">Remover</button>`;
    listaCarrinho.appendChild(itemDiv);
  });

  totalElement.innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Função para remover item do carrinho
function removerDoCarrinho(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

// Função para finalizar a compra
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert('Seu carrinho está vazio.');
    return;
  }

  alert(`Compra finalizada! Total: R$ ${total.toFixed(2)}`);
  carrinho = [];
  total = 0;
  atualizarCarrinho();
}
