// スライド　大画面
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
// スライド選択画面
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  autoplay: true,
  centerMode: true,
  focusOnSelect: true
});
// ruleコンテンツ要素手前で判定
var sFlag = 0;
var flg1 = 0;
var flg2 = 0;
var flg3 = 0;
var flg4 = 0;
var flg5 = 0;


$(window).scroll(function(){
  var height = $(this).scrollTop();
  var countS = $(".skill_title").length;

  for(var i = 0;i < countS; i++){
    var target = i;
    var heightS = document.querySelectorAll(".skill_title")[target].offsetTop-$(window).height()+300;
    //     各ruleコンテンツの位置計算
    var heightR =
        document.querySelectorAll(".rule1")[target].offsetTop-$(window).height()-100;
    var heightF =
        document.querySelectorAll(".rule2")[target].offsetTop-$(window).height()-100;
    var heightC =
        document.querySelectorAll(".rule3")[target].offsetTop-$(window).height()-100;
    var heightU =
        document.querySelectorAll(".rule4")[target].offsetTop-$(window).height()-100;
    var heightG =
        document.querySelectorAll(".rule5")[target].offsetTop-$(window).height()-100;
    if(height > heightS){
      if(sFlag == 0){
        sFlag == 1;
        $(".skill1").addClass("slideIn");
        $(".skill2").addClass("slideIn");
        $(".skill3").addClass("slideIn");
        $(".skill4").addClass("slideIn");
      }
    }
    if(height > heightR){
      if(flg1 == 0){
        flg1 == 1;
        $(".rule1").addClass("slideTop");
      }
    }
    if(height > heightF){
      if(flg2 == 0){
        flg2 == 1;
        $(".rule2").addClass("slideTop");
      }
    }
    if(height > heightC){
      if(flg3 == 0){
        flg3 == 1;
        $(".rule3").addClass("slideTop");
      }
    }
    if(height > heightU){
      if(flg4 == 0){
        flg4 == 1;
        $(".rule4").addClass("slideTop");
      }
    }
    if(height > heightG){
      if(flg5 == 0){
        flg5 == 1;
        $(".rule5").addClass("slideTop");
      }
    }
  }
});

$(document).ready(function(){
  $(".menu_btn").click(function(){
    $(".menu_btn, .menu_contents").toggleClass('open');
    
  });
});

// ======== header表示非表示

$(function(){
  var pos = 0;
  $(window).on('scroll',function(){
    if($(this).scrollTop() < pos){
      $('#header .header_top').css('height','100px');
      $('.logo, .header_menu, .menu_btn, .menu_contents').css('display','');
    }else{
      $('#header .header_top').css('height','0px');
      $('.logo, .header_menu, .menu_btn, .menu_contents').css('display','none');
    }
    pos = $(this).scrollTop();
  });
});