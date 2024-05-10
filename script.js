document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário
    // Obter os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    // Limpar os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    // Adicionar uma nova linha à tabela com os valores do formulário
    var tabela = document.getElementById("tabela");
    var novaLinha = tabela.insertRow(-1); // Insere uma nova linha no final da tabela
    var colunaNome = novaLinha.insertCell(0); // Insere uma célula na primeira coluna da nova linha
    colunaNome.innerHTML = nome; // Define o conteúdo da célula com o nome
    var colunaTelefone = novaLinha.insertCell(1); // Insere uma célula na segunda coluna da nova linha
    colunaTelefone.innerHTML = telefone; // Define o conteúdo da célula com o telefone
});
