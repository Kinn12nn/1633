const loginForm = document.getElementById('frm-login');
const emailInput = document.getElementById('frm-login-email');
const passwordInput = document.getElementById('frm-login-password');
const error = document.getElementById('frm-login-error');

loginForm.addEventListener('submit', login);

async function login(event) {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    const response = await fetch('http://locallhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        window.location.href = 'product.html';
    } else {
        error.inertText = data.error;
    }
}
