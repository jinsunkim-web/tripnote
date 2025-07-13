$(function () {
    $("#menu_svg").click(function () {
        $("#sub").fadeIn();
    });

    $("#close_svg").click(function () {
        $("#sub").fadeOut();
    });

    $(".sub_text li:nth-child(1)").mouseenter(function () {
        $(".img_menu div:nth-child(1)").addClass("img1");
    });
    $(".sub_text li:nth-child(1)").mouseleave(function () {
        $(".img_menu div:nth-child(1)").removeClass("img1");
    });

    $(".sub_text li:nth-child(2)").mouseenter(function () {
        $(".img_menu div:nth-child(1)").addClass("img2");
    });
    $(".sub_text li:nth-child(2)").mouseleave(function () {
        $(".img_menu div:nth-child(1)").removeClass("img2");
    });

    $(".sub_text li:nth-child(3)").mouseenter(function () {
        $(".img_menu div:nth-child(1)").addClass("img3");
    });
    $(".sub_text li:nth-child(3)").mouseleave(function () {
        $(".img_menu div:nth-child(1)").removeClass("img3");
    });
});