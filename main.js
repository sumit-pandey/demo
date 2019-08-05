const user = localStorage.getItem('username');
const pass = document.getElementById('passwd');
const userName = document.getElementById('username');
const password = localStorage.getItem('passcode');
const login = document.querySelector('.btn-login');
const form = document.querySelector('form');
const h1 = document.querySelector('h1');
const warn = document.getElementById('warning');
login.addEventListener('click', () => {
	if (userName.value !== user && password.value !== pass) {
		form.setAttribute('action', '#');
		warn.style.display = 'block';
	} else {
		form.setAttribute('action', 'login.html');
	}
});
