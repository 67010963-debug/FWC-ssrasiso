var COOKIE_NAME = "ft_todos";

function saveList() {
    var texts = [];
    $("#ft_list").children().each(function () {
        texts.push($(this).text());
    });
    document.cookie = COOKIE_NAME + "=" + encodeURIComponent(JSON.stringify(texts)) + "; path=/";
}

function loadList() {
    var parts = document.cookie.split(";");
    for (var i = 0; i < parts.length; i++) {
        var part = $.trim(parts[i]);
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
    var item = $("<div></div>").text(text);
    item.click(function () {
        if (confirm("Remove this TO DO?\n\n" + text)) {
            $(this).remove();
            saveList();
        }
    });
    $("#ft_list").prepend(item);
    if (save) {
        saveList();
    }
}

$(document).ready(function () {
    $("#new").click(function () {
        var text = prompt("What do you have to do?");
        if (text !== null && $.trim(text) !== "") {
            addTodo($.trim(text), true);
        }
    });

    var saved = loadList();
    for (var i = saved.length - 1; i >= 0; i--) {
        addTodo(saved[i], false);
    }
});
