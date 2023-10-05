function calcularGanho() {
  const inputValor = document.querySelector('.quanto-input');
  const valorInserido = parseFloat(inputValor.value);

  // Verifica se o valor inserido é válido (não é nulo ou vazio)
  const ganho = isNaN(valorInserido) ? 0 : valorInserido;

  const taxas = [0, 1.09, 1.10, 1.14, 1.12]; // As posições 1, 2, 3 e 4 correspondem às opções

  const select = document.querySelector('select');
  const opcaoSelecionada = parseInt(select.value);

  const taxa = taxas[opcaoSelecionada];

  const elementoGanhoTotal = document.querySelector('.ganho-total');
  elementoGanhoTotal.textContent = `R$ ${ganho ? (ganho * taxa).toFixed(2) : '0.00'}`;
}

// Adiciona event listeners para os eventos "input" e "change"
document.querySelector('.quanto-input').addEventListener('input', calcularGanho);
document.querySelector('select').addEventListener('change', calcularGanho);

// Chama a função para calcular o ganho inicialmente com o valor padrão do input
calcularGanho();