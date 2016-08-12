function showFullDate() {
    var arr = document.getElementsByClassName("relativetime");
    for (var i = 0; i < arr.length; i++) {
        arr[i].childNodes[0].nodeValue = arr[i].getAttribute("title");
    }
    var arr2 = document.getElementsByClassName("relativetime-clean");
    for (var i = 0; i < arr2.length; i++) {
        arr2[i].childNodes[0].nodeValue = arr2[i].getAttribute("title");
    }
}

document.domContentLoaded = showFullDate();
