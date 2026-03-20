document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-explorar');

    botao.addEventListener('click', () => {
        console.log("O usuário clicou no botão de exploração.");
        alert("Bem-vindo! Você será redirecionado em breve.");
        
        // Exemplo de scroll suave para outra seção
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
    });
});