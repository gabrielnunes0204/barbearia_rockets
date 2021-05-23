/* Função para carregar as fotos escondidas assim que o botão for acionado */
const btn = document.querySelector('.botao-carregar');
const fotosExtras1 = document.querySelector('.segunda_colunas-fotos');
const fotosExtras2 = document.querySelector('.terceira_colunas-fotos');
const textoBotaoEsconder = document.querySelector('#esconder');

function carregarFotos() {
    btn.addEventListener('click', () => {
        fotosExtras1.style.display = 'flex';
        fotosExtras2.style.display = 'flex';
        
        fotosExtras1.style.justifyContent = 'center';
        fotosExtras2.style.justifyContent = 'center';
        fotosExtras1.style.animation = 'showImagens .5s forwards';
        textoBotaoEsconder.style.display = 'block';
        btn.innerHTML = 'Mostrar menos';
    })
}
carregarFotos();

/* Função para esconder as fotos visiveis assim que o botão for acionado */
function esconderFotos() {
    btn.addEventListener('dblclick', () => {
        fotosExtras1.style.display = 'none';
        fotosExtras2.style.display = 'none';
        btn.innerHTML = 'Carregar mais';
        textoBotaoEsconder.style.display = 'none';
    })
}
esconderFotos();

/* Função para mexer os itens do menu assim que o Scroll for acionado */
function menuMovimento() {
	const menu = document.querySelector('.menu');

	window.addEventListener('scroll', () => {
		if(window.scrollY > 150) {
			menu.classList.add('ativado');
			menu.classList.remove('desativado');
			
		} else {
			menu.classList.remove('ativado');
			menu.classList.add('desativado');
		}
	});
}
menuMovimento();



