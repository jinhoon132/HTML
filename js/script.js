window.addEventListener("scroll",function(){
    var html = document.documentElement; //루트요소(<html>)
    var top = html.scrollTop; // 문서의 상단에서 현재 스크롤까지의 값
    var header = document.querySelector("header");
    if(top>100) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
    
});
window.onload = function(){

    var main_view = new Swiper("#main_view",{
        wrapperClass:"container", //슬라이드요소를 감싸는 요소의 클래스
        slideClass:'item',  //슬라이드요소들의 공통 클래스
        speed:800, //슬라이드가 전환되는 시간
        spaceBetween:1, //슬라이드 사이간격
        autoplay:{ //자동으로 슬라이드 됨.
            delay: 3000, //슬라이드 하나가 보여지는 시간(5000ms = 5초)
            disableOnInteraction:false // 상호작용 후 다시 자동재생 실행

        },
        pagination:{ //페이지버튼이 활성화
            el: '.pager', //페이지구성 영역지정
            bulletActiveClass:'active', //활성된 영역에 추가되는 클래스
            clickable:true //버튼클릭시 슬라이드 이동가능
        },
    });
    
}