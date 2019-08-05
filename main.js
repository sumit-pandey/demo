let input = 'userName';
const userName = document.getElementById('username');
const login = document.querySelector('.btn-login');
login.addEventListener('click', () => {
	if (userName.value) {
		localStorage.setItem(input, userName.value);
	}
});
