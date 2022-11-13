var lastScrollTop = 0;
menu = document.getElementById("menu");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document .documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        menu.style.top="-80px";
    } else {
        menu.style.top="0px";
    }
    lastScrollTop = scrollTop;
})