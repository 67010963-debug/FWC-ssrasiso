var balloon = document.getElementById("balloon");
var colors = ["red", "green", "blue"];
var colorIndex = 0;
var size = 200;

function render() {
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
}

balloon.onclick = function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;
    if (size > 420) {
        size = 200;
    }
    render();
};

balloon.onmouseleave = function () {
    size -= 5;
    if (size < 200) {
        size = 200;
    }
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    render();
};

render();
