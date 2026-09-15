$(document).ready(function () {
    var colors = ["red", "green", "blue"];
    var colorIndex = 0;
    var size = 200;

    function render() {
        $("#balloon").css({
            "width": size + "px",
            "height": size + "px",
            "background-color": colors[colorIndex]
        });
    }

    $("#balloon").click(function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;
        if (size > 420) {
            size = 200;
        }
        render();
    });

    $("#balloon").mouseleave(function () {
        size -= 5;
        if (size < 200) {
            size = 200;
        }
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        render();
    });

    render();
});
