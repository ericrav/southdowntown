$(document).ready(function () {

    var $html = $("html,body");
    var $nav = $(".nav");
    var $arrow = $(".arrow > i");

    $(".toHistory").click(function(e) {
        $html.animate({
            scrollTop: $(window).height()
        }, 1200);
        e.preventDefault();
        return false;
    });
    
    $(window).scroll(function(e) {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= $(window).height() - 80) { // height of nav bar
            $nav.addClass("fixed");
            $("#history").addClass("active");
        } else {
            var percentage = $(window).scrollTop() / ($(window).height() - 80);
            var deg = percentage * 180;
            $arrow.css("transform", "rotate(" + deg + "deg)");
            $nav.removeClass("fixed");
            $(".nav .active").removeClass("active");
        }
    });
});