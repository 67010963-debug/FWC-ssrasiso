function isPositiveInteger(value) {
    return /^[0-9]+$/.test(value.trim());
}

document.getElementById("calc").onsubmit = function (event) {
    event.preventDefault();

    var leftText = document.getElementById("left").value;
    var rightText = document.getElementById("right").value;
    var operator = document.getElementById("operator").value;

    if (!isPositiveInteger(leftText) || !isPositiveInteger(rightText)) {
        alert("Error :(");
        return false;
    }

    var left = parseInt(leftText, 10);
    var right = parseInt(rightText, 10);

    if ((operator === "/" || operator === "%") && right === 0) {
        alert("It's over 9000!");
        return false;
    }

    var result;
    if (operator === "+") {
        result = left + right;
    } else if (operator === "-") {
        result = left - right;
    } else if (operator === "*") {
        result = left * right;
    } else if (operator === "/") {
        result = left / right;
    } else {
        result = left % right;
    }

    alert(result);
    console.log(result);
    return false;
};

setInterval(function () {
    alert("Please, use me...");
}, 30000);
