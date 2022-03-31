var hidden = document.querySelector("#close");

var text = document.querySelector("#text");
var search = document.querySelector("#search");
var baidu = "http://www.baidu.com/s?wd=";
text.addEventListener("keyup", function(e) {
    if (e.keyCode == 13) {
        if (text.value == "o--o") {
            hidden.id = "open";
            text.value = "";
        } else {
            window.open(baidu + text.value);
            text.value = "";
        }
    }
});
search.addEventListener("click", function() {
    if (text.value == "o--o") {
        hidden.id = "open";
        text.value = "";
    } else {
        window.open(baidu + text.value);
        text.value = "";
    }
});

var mp3 = document.querySelector("audio");
var logo = document.querySelector("h1");
logo.addEventListener("click", function() {
    mp3.play();
});