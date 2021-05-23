/* Função para colocar um border-bottom embaixo da cada item da lista de serviços */
function linhaLista() {
	const li_corte = document.querySelectorAll('.cortes li');
	const li_barba = document.querySelectorAll('.barbas li');

	const arrayCortes = Array.from(li_corte);
	const arrayBarbas = Array.from(li_barba);

	arrayCortes.map((item) => {
		item.style.borderBottom = '1px solid #777';
	});

	arrayBarbas.map((item) => {
		item.style.borderBottom = '1px solid #777';
	});
}
linhaLista();

/* Função para validar os campos, verificar se estão todos preenchidos */
function validarCampos() {
	const form = document.querySelectorAll('.formulario-inputs input');
	const btn = document.querySelector('.botao-enviar');
	const textarea = document.querySelector('textarea');
		
	const arrayForm = Array.from(form);

	function editarTelefone() {
		arrayForm[2].addEventListener('change', () => {
			const telefone = arrayForm[2].value;
			const novoTelefone = telefone.replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
			arrayForm[2].value = novoTelefone;
		});
	}
	editarTelefone();

	btn.addEventListener('click', () => {
		
		// const nome = document.querySelector('#td-nome');
		// const email = document.querySelector('#td-email');
		// const telefone = document.querySelector('#td-telefone');
		// const endereco = document.querySelector('#td-endereco');
		// const mensagem = document.querySelector('#td-mensagem');
		// const status = document.querySelector('#td-status div');
		
		if (arrayForm.values === '' || !arrayForm[1].value.includes('@') || 
			arrayForm[1].value.length < 13 || arrayForm[2].value.length < 11) {
			arrayForm[0].style.border = '1px solid red';
			arrayForm[1].style.border = '1px solid red';
			arrayForm[2].style.border = '1px solid red';
			arrayForm[3].style.border = '1px solid red';
			arrayForm[0].style.padding = '5px';
			arrayForm[1].style.padding = '5px';
			arrayForm[2].style.padding = '5px';
			arrayForm[3].style.padding = '5px';
			alert('Verifique os dados e corrija, tem algo de errado');
		} else {
			alert('Mensagem Enviada');
			arrayForm[0].style.border = '1px solid #ddd';
			arrayForm[1].style.border = '1px solid #ddd';
			arrayForm[2].style.border = '1px solid #ddd';
			arrayForm[3].style.border = '1px solid #ddd';
			arrayForm[0].style.padding = '5px';
			arrayForm[1].style.padding = '5px';
			arrayForm[2].style.padding = '5px';
			arrayForm[3].style.padding = '5px';
			
			// nome.innerHTML = arrayForm[0].value;
			// email.innerHTML = arrayForm[1].value;
			// telefone.innerHTML = arrayForm[2].value;
			// endereco.innerHTML = arrayForm[3].value;
			// mensagem.innerHTML = textarea.value;
			
			// status.style.width = '40px';
			// status.style.height = '10px';
			// status.style.background = 'red';
			// status.style.margin = '0 auto';
			// status.style.borderRadius = '8px';
			
			// setInterval(() => {
			// 	status.style.background = 'green';
			// }, 5000);
			
			arrayForm[0].value = '';
			arrayForm[1].value = '';
			arrayForm[2].value = '';
			arrayForm[3].value = '';
			textarea.value = '';
		}
	});
}
validarCampos();

/* Função para rolagem do menu suave quando clicado */
function rolagemItemMenu() {
	const links = document.querySelectorAll('.item-scroll');
	
	function secaoRolagem(event){
		event.preventDefault();
		const href = event.currentTarget.getAttribute('href');
		const section = document.querySelector(href);
		
		section.scrollIntoView ({
			behavior: 'smooth',
			block: 'start',
		});
	}

		links.forEach((item) => {
			item.addEventListener('click', secaoRolagem);
		});
}
rolagemItemMenu();

/* Função para mexer os itens do menu assim que o Scroll for acionado */
function menuMovimento() {
	const menu = document.querySelector('.menu');

	window.addEventListener('scroll', () => {
		if(window.scrollY > 100) {
			menu.classList.add('ativado');
			menu.classList.remove('desativado');
			
		} else {
			menu.classList.remove('ativado');
			menu.classList.add('desativado');
		}
	});
}
menuMovimento();



