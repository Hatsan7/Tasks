document.querySelector('#test').onmousemove = function(event) {
    document.querySelector('#offx').innerHTML = event.offsetX;
    document.querySelector('#offy').innerHTML = event.offsetY;

}