function showFullDate() {
    var arr = document.getElementsByClassName("relativetime");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].childNodes[0].nodeValue.indexOf("at") != -1) {
            console.log(arr[i].childNodes[0].nodeValue.indexOf("at"));
            console.log(arr[i].childNodes[0].nodeValue);
            arr[i].childNodes[0].nodeValue = arr[i].getAttribute("title");
        }
    }
    var arr2 = document.getElementsByClassName("relativetime-clean");
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i].childNodes[0].nodeValue.indexOf("at") != -1) {
            arr2[i].childNodes[0].nodeValue = arr2[i].getAttribute("title");
        }
    }
}

document.domContentLoaded = showFullDate();
