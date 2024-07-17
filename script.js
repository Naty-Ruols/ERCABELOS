// Seleciona o elemento "Quem Somos"
const aboutUsButton = document.getElementById('aboutUsButton');
// Seleciona a seção "Quem Somos"
const aboutUsSection = document.getElementById('aboutUsSection');

// Adiciona um listener de clique ao botão "Quem Somos"
aboutUsButton.addEventListener('click', function() {
    // Toggla a classe 'active' no botão para alterar o estilo
    aboutUsButton.classList.toggle('active');
    // Toggla a classe 'hidden' na seção "Quem Somos" para mostrar ou esconder
    aboutUsSection.classList.toggle('hidden');
});

// Adiciona um listener de clique ao botão "Contato"
contactButton.addEventListener('click', function() {
    // Toggla a classe 'active' no botão para alterar o estilo
    contactButton.classList.toggle('active');
    // Toggla a classe 'hidden' na seção "Contato" para mostrar ou esconder
    contactSection.classList.toggle('hidden');
});