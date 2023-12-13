document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        // Evita o envio padrão do formulário
        event.preventDefault();

        // Exibe a tela de carregamento
        window.location.href = "loader.html";
    });
});
