(function() {
    "use strict";

    var floatingBtn = document.getElementById("sub-scrn-btn");
    var subScreen = document.querySelector(".sub-screen");

    floatingBtn.addEventListener("click", function(e) {
        var btn = e.currentTarget;
        //var parent = btn.parentNode;
        //parent.classList.toggle("is--open");
        //var subScreen = parent.querySelector(".sub-screen");
        subScreen.classList.toggle("is--expanded");
        btn.classList.toggle("is--off");
    });

})();