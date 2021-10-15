'use strict';

$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 10000,
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  centerMode: true, //要素を中央寄せ
  centerPadding: '20%', //両サイドの見えている部分のサイズ
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで2枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
  responsive: [
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
      slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
    }
  },
  {
    breakpoint: 426,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1,//スライドを画面に1枚見せる
      slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    }
  }
]
});


// ページトップボタン
$(function () {
  const topBtn = $(".page-top");
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});


// ハンバーガーメニュー
{
  const open=document.getElementById('open');
  const overlay=document.querySelector('.overlay');
  const close=document.getElementById('close');

  open.addEventListener('click',()=>{
    overlay.classList.add('show');
    open.classList.add('hide');
    close.classList.remove('hide');
  
  });

  close.addEventListener('click',()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
    close.classList.add('hide');
  });
}
