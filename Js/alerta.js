document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.replace("/");
    alert('Formulário enviado com sucesso!');
});