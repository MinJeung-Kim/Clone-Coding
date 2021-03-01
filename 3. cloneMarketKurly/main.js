(function (window, document) {
  'use strict';

  // 1. 배열처럼 값을 가져오지만 배열로 사용할 수 없음.
  const $mouseOver = document.querySelectorAll('.mouseOver');

  const $gnb_pop = document.getElementById('gnb-pop');
  const $center_pop = document.getElementById('center-pop');
  const $loc_pop = document.getElementById('loc-pop');
  //console.log(mouseOver.length);

  // 2. 배열로 변경.
  const _arr = Array.from($mouseOver);
  _arr.forEach((item) => {
    item.addEventListener('mouseover', menuOpen);

    item.addEventListener('mouseout', menuClose);
  });

  function menuOpen(e) {
    //console.log(e.target.id);

    switch (e.target.id) {
      case 'menuAll':
        $gnb_pop.classList.toggle('on');
        break;

      case 'center':
        $center_pop.classList.toggle('on');
        break;

      case 'location':
        $loc_pop.classList.toggle('on');
        break;
    }
  }

  function menuClose(e) {
    console.log('g');
    switch (e.target.id) {
      case 'gnb-pop':
        $gnb_pop.classList.toggle('off');
        break;

      case 'center-pop':
        $center_pop.classList.toggle('off');
        break;

      case 'loc-pop':
        $loc_pop.classList.toggle('off');
        break;
    }
  }
})(window, document);
