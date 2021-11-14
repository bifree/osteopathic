'use strict';

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
  const overlay=document.querySelector('.sp-menu');
  const close=document.getElementById('close');
  const header=document.querySelector('.header-top');
  const menu=document.querySelector('.sp-menu__list');
 

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

  
  header.addEventListener('click',()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
    close.classList.add('hide');
  });
  
  menu.addEventListener('click',()=>{
    overlay.classList.remove('show');
    open.classList.remove('hide');
    close.classList.add('hide');
  });
}


// アコーディオンメニュー
$(function () {
  $('.voice__accordion').css("display", "none");
  $('.voice__open').on('click', function () {
    $(this).next().slideToggle();
    $(this).css("display", "none");
  })
  $('.voice__close').on('click', function () {
    $(this).parent('.voice__accordion').slideUp();
    $(this).parent('.voice__accordion').prev('.voice__open').slideToggle();
    // クリックされたボタンの親要素にあたる.ac-childはslideUpで閉じる
  })
});
