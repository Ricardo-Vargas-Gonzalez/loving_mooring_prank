function moverPosicionRandom(elm) {
    elm.style.position = 'absolute'; /*Esto permite que su movimiento pueda llevarse a cabo por toda la pantalla */
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}
let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_zetso")[0];

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target) });