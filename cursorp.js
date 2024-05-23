document.addEventListener("DOMContentLoaded", function() {
    var yuvarlak = document.getElementById("yuvarlak");

    function imlecTakip() {
        document.addEventListener("mousemove", function(e) {
            var x = e.clientX;
            var y = e.clientY + window.scrollY;
            var yuvarlakCap = yuvarlak.offsetWidth;
            var yuvarlakYukseklik = yuvarlak.offsetHeight;
            var maxY = window.innerHeight + window.scrollY - yuvarlakYukseklik;
            y = Math.min(y, maxY);
            yuvarlak.style.left = (x - yuvarlakCap / 2) + "px";
            yuvarlak.style.top = (y - yuvarlakCap / 2) + "px";
        });
    }
    imlecTakip();
});
