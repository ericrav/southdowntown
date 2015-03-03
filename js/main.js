$(document).ready(function () {

    var $html = $("html,body");
    var $nav = $(".nav");
    var $arrowContainer = $(".arrow");
    var $arrow = $(".arrow > i");

    $(".scroller").click(function(e) {
        var scrollto = $(this).attr("data-scrollto");
        var location = 0;
        if (scrollto === "top") location = 0;
        else if (scrollto === "history") location = $(window).height();
        $html.animate({
            scrollTop: location
        }, 1200);
        e.preventDefault();
        return false;
    });

    
    $(window).scroll(function(e) {
        console.log($(window).scrollTop());
        if ($(window).scrollTop() >= $(window).height() - 80) { // height of nav bar
            $nav.addClass("fixed");
            $arrowContainer.attr("data-scrollto", "top");
            $("#history").addClass("active");
            $arrow.css("transform", "rotate(180deg)");
        } else {
            var percentage = $(window).scrollTop() / ($(window).height() - 80);
            var deg = percentage * 180;
            $arrow.css("transform", "rotate(" + deg + "deg)");
            $nav.removeClass("fixed");
            $arrowContainer.attr("data-scrollto", "history");
            $(".nav .active").removeClass("active");
        }
    });
});