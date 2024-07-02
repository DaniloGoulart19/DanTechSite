// JavaScript personalizado pode ser adicionado aqui
// Por exemplo, inicializar o carrossel se necessário
$(document).ready(function(){
    $('#testimonialCarousel').carousel({
        interval: 3000
    });

    // Função para carregar o conteúdo de testimonials.html
    async function loadTestimonials() {
        try {
            const response = await fetch('partials/testimonials.html');
            const testimonialsHtml = await response.text();
            document.getElementById('avaliacoes').innerHTML = testimonialsHtml;
        } catch (error) {
            console.error('Erro ao carregar testimonials:', error);
            document.getElementById('avaliacoes').innerHTML = '<p>Erro ao carregar avaliações.</p>';
        }
    }

    // Carrega as avaliações quando a página for carregada
    loadTestimonials();
});
