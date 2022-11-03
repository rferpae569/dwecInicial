window.addEventListener('DOMContentLoaded', () => {
    let nombre=prompt("Dime tu nombre");
    document.getElementById('h').innerText="Bienvenido " + nombre;
    setTimeout(() => {
        document.getElementById('h').innerHTML+="<h2>" +location.href +"</h2>";
    }, 3000);
});
