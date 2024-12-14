const navItemLogin = document.getElementById('nav-item-login');
const navItemLogout = document.getElementById('nav-item-logout');

function checkLogin(){
    const user = localStorage.getItem('user') ;
       
       if (user){
        navItemLogin.style.display = 'none';
        navItemLogin.style.display = 'block';
    } else {
        navItemLogin.style.display = 'block';
        navItemLogin.style.display = 'none';
    }
}

function logout(){
    localStorage.removeItem('user');
    location.reload();
}


checkLogin();