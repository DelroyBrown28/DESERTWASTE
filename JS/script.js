$(document).ready(function() {





    $(".button_to_store").click(function() {
        $(".dark_cover").css({"background-color": "#E4C4B5", "opacity": "1"});
        $("#BGVideo").addClass("houdini");
        $(".main_title_wrap").addClass("houdini");
        $(".socials").addClass("houdini");


        $("#store_wrap").css({"display": "flex"});
        $(".outfit1_longsleevetop").css({"display": "block"});
        $(".outfit1_longsleevetop").animate({
            left: "0",
        })

    })

})

