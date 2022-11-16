var lastScrollTop = 0, scrollPx = 0, accumulativeScroll = 0;
menu = document.getElementById("menu");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset;
    if (scrollTop > lastScrollTop) {
        // desceu
        scrollPx = window.pageYOffset - lastScrollTop;
        accumulativeScroll += scrollPx;
        if (accumulativeScroll >= 80) {
            accumulativeScroll = 80;
        }
        menu.style.top="-" + accumulativeScroll + "px";
    } else {
        // subiu
        scrollPx = lastScrollTop - window.pageYOffset;
        accumulativeScroll -= scrollPx;
        if (-accumulativeScroll >= 0) {
            accumulativeScroll = 0;
        }
        menu.style.top="-" + accumulativeScroll + "px";
    }
    lastScrollTop = scrollTop;
})