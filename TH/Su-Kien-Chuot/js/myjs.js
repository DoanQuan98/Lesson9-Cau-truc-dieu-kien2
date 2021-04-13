let imgBall = document.getElementById('myImg');
function init() {
    imgBall = document.getElementById('myImg');
    imgBall.style.position = 'relative';
    imgBall.style.left = '0px';
}
function moveRight() {
    imgBall.style.left = parseInt(imgBall.style.left) + 2 + '0px';
}
window.onload = init;
