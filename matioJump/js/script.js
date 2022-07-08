const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');

const pulo = () => {
	mario.classList.add('pulo');
	setTimeout(() => {
		
		mario.classList.remove('pulo');
	
	}, 500);
}

const loop = setInterval(() => {

const tuboPosition = tubo.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

	if (tuboPosition <= 100 && tuboPosition > 0 && marioPosition < 80) {
		
		tubo.style.animation = 'none';
		tubo.style.left = '${tuboPosition}px';

		mario.style.animation = 'none';
		mario.style.bottom = '${marioPosition}px';

		mario.src = './imagens/game-over.PNG';
		mario.style.width = '75px'
	
	}

}, 10); 

document.addEventListener('keydown', pulo);