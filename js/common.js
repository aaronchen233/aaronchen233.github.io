var text = document.getElementById("text");
var search = document.getElementById("search");
var baidu = "https://www.baidu.com/#ie={inputEncoding}&wd=";
text.onkeyup = function() {
    if (event.keyCode == 13) {
        window.open(baidu + text.value);
        text.value = "";
    }
}
search.onclick = function() {
    window.open(baidu + text.value);
    text.value = "";
}