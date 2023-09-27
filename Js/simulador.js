function calcularGanho() {
    const inputValor = document.querySelector('.quanto-input');
    const valorInserido = parseFloat(inputValor.value);
  
    const taxas = [0, 1.09, 1.10, 1.14, 1.12]; // As posições 1, 2, 3 e 4 correspondem às opções
  
    const select = document.querySelector('select');
    const opcaoSelecionada = parseInt(select.value);
  
    const taxa = taxas[opcaoSelecionada];
  
    const ganho = valorInserido * taxa;
  
    const elementoGanhoTotal = document.querySelector('.ganho-total');
    elementoGanhoTotal.textContent = `R$ ${ganho.toFixed(2)}`;
  }
  
  // Adiciona event listeners para os eventos "input" e "change"
  document.querySelector('.quanto-input').addEventListener('input', calcularGanho);
  document.querySelector('select').addEventListener('change', calcularGanho);
  
  // Chama a função para calcular o ganho inicialmente com o valor padrão do input
  calcularGanho();