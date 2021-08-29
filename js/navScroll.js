var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("top-nav").style.top = "0";
    } else {
        document.getElementById("top-nav").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}

