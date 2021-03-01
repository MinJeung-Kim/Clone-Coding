(function (window, document) {
    'use strict';

    // $변수명 => 요소를 담는 변수
    const $toggles = document.querySelectorAll('.toggle'); // NodeList => 유사배열
    const $toggleBtn = document.getElementById('toggle-btn');

    //사용자가 특정버튼을 클릭했을때 
    $toggleBtn.addEventListener('click', function () {
        toggleElemeents();
    });

    //브라우저에 이벤트(resize=사이즈가 조절될때)가 발생할때
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024){
            // Off toggle element
            offElements();
        }
    });

    function toggleElemeents() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');
        }); 
    }

    function offElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        }); 
    }
})(window, document)