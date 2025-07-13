$(function () {
    $(window).scroll(function () {
        var viewport = $(window).height();
        if ($(document).scrollTop() > viewport * 5) {//여기 지정된 길이 이후부터 적용됩니다
            $('#scroll_svg').hide();
            /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
        }
        else {
            $('#scroll_svg').show();
        }

    });

});