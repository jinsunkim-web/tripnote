$( document ).ready( function() {
    var jbOffset = $( '#nav' ).offset();
    /*선택자는 본인 구조에 맞게 수정*/
    $( window ).scroll( function() {
      if ( $( document ).scrollTop() > 6000) {//여기 지정된 길이 이후부터 적용됩니다
        $( '#main_banner video' ).addClass("absolute");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
      else {
        $( '#main_banner video' ).removeClass("absolute");
        /*선택자는 본인 구조에 맞게 수정, on클래스 만들어서 변경 원하는 스타일 주세요*/
      }
    });
  });