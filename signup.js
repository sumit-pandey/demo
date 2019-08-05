let inputUser = 'username';
let passcode = 'passcode';
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('passcode');
const signup = document.querySelector('.btn-signup');
signup.addEventListener('click', () => {
	if (userName.value && password.value) {
		localStorage.setItem(inputUser, userName.value);
		localStorage.setItem(passcode, password.value);
	}
});
