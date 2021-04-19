gsap.to('.main-banner__headline--animation', {
	duration: 3,
	ease: 'back'
});

gsap.from('.main-banner__headline--animation', {
	opacity: 0,
	duration: 2,
	y: -300,
	ease: 'back'
});

gsap.from('.webdev', {
	opacity: 0,
	delay: 2.5,
	duration: 2,
	ease: 'back'
});

gsap.from('.main-banner__headline--contact-btn', {
	opacity: 0,
	delay: 3,
	duration: 2,
	ease: 'back'
});

gsap.from('nav', {
	duration: 6,
	opacity: 0
});

gsap.from('.about', {
	opacity: 0,
	duration: 1.5,
	scrollTrigger: {
		trigger: '.about',
		start: 'top center'
	}
});

gsap.from('.what-i-do', {
	scrollTrigger: {
		trigger: '.what-i-do',
		start: 'top center',
		marker: true
	},
	duration: 1,
	opacity: 0,
	stagger: 0.2,
	x: -15
});

gsap.from('.experience', {
	scrollTrigger: {
		trigger: '.experience',
		start: 'top center'
	},
	duration: 2,
	opacity: 0,
	stagger: 0.5
});

gsap.from('.fab', {
	scrollTrigger: {
		trigger: '.fab',
		start: 'top center'
	},
	duration: 1,
	opacity: 0,
	stagger: 0.2,
	y: -150,
	ease: 'back'
});

gsap.from('.my-projects', {
	opacity: 0,
	duration: 1.5,
	scrollTrigger: {
		trigger: '.my-projects',
		start: 'top 70%'
	}
});

// Filter Buttons======
// let htmlEmail = document.getElementById('html-email');
// let landingPage = document.getElementById('landing-page');
// let inProgress = document.getElementById('in-progress');
// let projects = document.querySelector(
// 	'.my-projects__project-container--project'
// );

//Modal=================
let modalBtn1 = document.getElementById('hbo-btn');
let modal1 = document.querySelector('.hbo-modal');
let closeBtn1 = document.querySelector('.hbo-close-btn');
modalBtn1.onclick = function() {
	modal1.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn1.onclick = function() {
	modal1.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function() {
	if (event.target == modal) {
		modal1.style.display = 'none';
	}
};
let modalBtn2 = document.getElementById('dribbble-btn');
let modal2 = document.querySelector('.dribbble-modal');
let closeBtn2 = document.querySelector('.dribbble-close-btn');
modalBtn2.onclick = function() {
	modal2.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn2.onclick = function() {
	modal2.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function() {
	if (event.target == modal) {
		modal2.style.display = 'none';
	}
};
let modalBtn3 = document.getElementById('bayside-btn');
let modal3 = document.querySelector('.bayside-modal');
let closeBtn3 = document.querySelector('.bayside-close-btn');
modalBtn3.onclick = function() {
	modal3.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn3.onclick = function() {
	modal3.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function() {
	if (event.target == modal) {
		modal3.style.display = 'none';
	}
};
let modalBtn4 = document.getElementById('target-btn');
let modal4 = document.querySelector('.target-modal');
let closeBtn4 = document.querySelector('.target-close-btn');
modalBtn4.onclick = function() {
	modal4.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn4.onclick = function() {
	modal4.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function() {
	if (event.target == modal) {
		modal4.style.display = 'none';
	}
};
let modalBtn5 = document.getElementById('kayak-btn');
let modal5 = document.querySelector('.kayak-modal');
let closeBtn5 = document.querySelector('.kayak-close-btn');
modalBtn5.onclick = function() {
	modal5.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn5.onclick = function() {
	modal5.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function() {
	if (event.target == modal) {
		modal5.style.display = 'none';
	}
};
let modalBtn6 = document.getElementById('kim-btn');
let modal6 = document.querySelector('.kim-modal');
let closeBtn6 = document.querySelector('.close-btn');
modalBtn6.onclick = function() {
	modal6.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn6.onclick = function() {
	modal6.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function() {
	if (event.target == modal) {
		modal6.style.display = 'none';
	}
};

let modalBtn7 = document.getElementById('sushi-btn');
let modal7 = document.querySelector('.sushi-modal');
let closeBtn7 = document.querySelector('.sushi-close-btn');
modalBtn7.onclick = function() {
	modal7.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn7.onclick = function() {
	modal7.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function(e) {
	if (event.target == modal) {
		modal7.style.display = 'none';
	}
};

let modalBtn8 = document.getElementById('medical-btn');
let modal8 = document.querySelector('.medical-modal');
let closeBtn8 = document.querySelector('.medical-close-btn');
modalBtn8.onclick = function() {
	modal8.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn8.onclick = function() {
	modal8.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function(e) {
	if (event.target == modal) {
		modal8.style.display = 'none';
	}
};
let modalBtn9 = document.getElementById('fb-btn');
let modal9 = document.querySelector('.fb-modal');
let closeBtn9 = document.querySelector('.fb-close-btn');
modalBtn9.onclick = function() {
	modal9.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn9.onclick = function() {
	modal9.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function(e) {
	if (event.target == modal) {
		modal9.style.display = 'none';
	}
};
let modalBtn10 = document.getElementById('lol-btn');
let modal10 = document.querySelector('.lol-modal');
let closeBtn10 = document.querySelector('.lol-close-btn');
modalBtn10.onclick = function() {
	modal10.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn10.onclick = function() {
	modal10.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function(e) {
	if (event.target == modal) {
		modal10.style.display = 'none';
	}
};
let modalBtn11 = document.getElementById('verizon-btn');
let modal11 = document.querySelector('.verizon-modal');
let closeBtn11 = document.querySelector('.verizon-close-btn');
modalBtn11.onclick = function() {
	modal11.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn11.onclick = function() {
	modal11.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function(e) {
	if (event.target == modal) {
		modal11.style.display = 'none';
	}
};
let modalBtn12 = document.getElementById('parkmobile-btn');
let modal12 = document.querySelector('.parkmobile-modal');
let closeBtn12 = document.querySelector('.parkmobile-close-btn');
modalBtn12.onclick = function() {
	modal12.style.display = 'block';
	overlay.classList.add('active');
};
closeBtn12.onclick = function() {
	modal12.style.display = 'none';
	overlay.classList.remove('active');
};
window.onclick = function(e) {
	if (event.target == modal) {
		modal12.style.display = 'none';
	}
};
//Email Capture========================
window.onload = function() {
	//VARIABLES=====
	let emailState = false;
	let emailModal = document.getElementsByClassName('email-modal')[0];
	let overlay = document.getElementsByClassName('overlay')[0];
	let emailCloseBtn = document.getElementsByClassName(
		'email-modal__close-btn'
	)[0];
	let emailInput = document.getElementsByClassName(
		'email-modal__form-group--email'
	)[0];
	let emailSubmit = document.getElementsByClassName(
		'email-modal__form-group--submit'
	)[0];
	let decline = document.getElementsByClassName('decline')[0];
	//FUCTIONS=====
	let emailIsValid = email => {
		return /\S+@\S+\.\S+/.test(email);
	};
	let showModal = () => {
		document.body.addEventListener('mouseleave', () => {
			if (emailState == false) {
				emailModal.classList.add('active');
				overlay.classList.add('active');
				emailState = true;
			}
		});
	};
	let closeModal = () => {
		emailModal.classList.remove('active');
		overlay.classList.remove('active');
	};
	//EVENT LISTENERS====
	decline.addEventListener('click', () => {
		closeModal();
	});

	showModal();

	emailSubmit.addEventListener('click', () => {
		if (emailIsValid(emailInput.value)) {
			console.log('valid');
		} else {
			console.log('not valid');
		}
	});
};
