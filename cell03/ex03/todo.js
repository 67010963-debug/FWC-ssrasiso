var COOKIE_NAME = "ft_todos";

function saveList() {
    var texts = [];
    var items = document.getElementById("ft_list").children;
    for (var i = 0; i < items.length; i++) {
        texts.push(items[i].textContent);
    }
    document.cookie = COOKIE_NAME + "=" + encodeURIComponent(JSON.stringify(texts)) + "; path=/";
}

function loadList() {
    var parts = document.cookie.split(";");
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i].trim();
        if (part.indexOf(COOKIE_NAME + "=") === 0) {
            var raw = decodeURIComponent(part.substring(COOKIE_NAME.length + 1));
            try {
                return JSON.parse(raw);
            } catch (e) {
                return [];
            }
        }
    }
    return [];
}

function addTodo(text, save) {
    var list = document.getElementById("ft_list");
    var item = document.createElement("div");
    item.textContent = text;
    item.onclick = function () {
        if (confirm("Remove this TO DO?\n\n" + text)) {
            list.removeChild(item);
            saveList();
        }
    };
    list.insertBefore(item, list.firstChild);
    if (save) {
        saveList();
    }
}

document.getElementById("new").onclick = function () {
    var text = prompt("What do you have to do?");
    if (text !== null && text.trim() !== "") {
        addTodo(text.trim(), true);
    }
};

var saved = loadList();
for (var i = saved.length - 1; i >= 0; i--) {
    addTodo(saved[i], false);
}
