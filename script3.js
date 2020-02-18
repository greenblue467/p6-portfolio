window.addEventListener("load", function() {
  $(".loading").fadeOut("slow");
  $("header").css({
    display: "block"
  });
  $("main").css({
    display: "block"
  });
  $("footer").css({
    display: "block"
  });
});

//global
$(window).scroll(function() {
  if ($(this).scrollTop() < $(".work").offset().top - 100) {
    if ($(".menu").hasClass("menu_slide")) {
      $("nav").addClass("nav_color nav_change");
      $(".logo").addClass("logo_change logo_color");
      $(".menu_item").addClass("item_change");
      $(".menu_link").addClass("link_change");
      $(".hamburger_icon1").addClass("hamburger_color1");
      $(".hamburger_icon2").addClass("hamburger_color2");
      $(".hamburger_icon3").addClass("hamburger_color3");
    } else {
      $("nav").removeClass("nav_color nav_change");
      $(".logo").removeClass("logo_change logo_color");
      $(".menu_item").removeClass("item_change");
      $(".menu_link").removeClass("link_change");
      $(".hamburger_icon1").removeClass("hamburger_color1");
      $(".hamburger_icon2").removeClass("hamburger_color2");
      $(".hamburger_icon3").removeClass("hamburger_color3");
    }
  } else {
    $("nav").addClass("nav_color nav_change");
    $(".logo").addClass("logo_change logo_color");
    $(".menu_item").addClass("item_change");
    $(".menu_link").addClass("link_change");
    $(".hamburger_icon1").addClass("hamburger_color1");
    $(".hamburger_icon2").addClass("hamburger_color2");
    $(".hamburger_icon3").addClass("hamburger_color3");
    $(".submenu").slideUp();
  }
});

//header
$(".hamburger").on("click", function() {
  $(".menu").toggleClass("menu_slide");
  $(".menu_item").toggleClass("item_slide");
  $(".hamburger_icon1").toggleClass("hamburger_change1");
  $(".hamburger_icon2").toggleClass("hamburger_change2");
  $(".hamburger_icon3").toggleClass("hamburger_change3");
  $(".submenu").slideUp();

  if ($(window).scrollTop() < $(".work").offset().top) {
    $("nav").toggleClass("nav_color");
    $(".logo").toggleClass("logo_change");
    $(".hamburger_icon1").toggleClass("hamburger_color1");
    $(".hamburger_icon2").toggleClass("hamburger_color2");
    $(".hamburger_icon3").toggleClass(" hamburger_color3");
  }
});

$("#menu_link").on("click", function() {
  $(".submenu").slideToggle();
});
$(".menu_item").addClass("item_color ");

$(".logo").on("click", function() {
  $("html").animate(
    {
      scrollTop: 0
    },
    1000
  );
  $(".submenu").slideUp();
});
$(".menu_item").on("click", function() {
  $(this).addClass("item_color ");
  $(this)
    .siblings()
    .removeClass("item_color ");
  $(this)
    .siblings()
    .find(".submenu")
    .slideUp();
});
