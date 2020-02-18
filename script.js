/*window.addEventListener("load", function() {
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
});*/

//global
$(window).scroll(function() {
  if ($(this).scrollTop() < 500) {
    $(".flip").css({
      transform: "rotate(0deg)"
    });
    $(".menu_link").addClass("link_color ");
    $(".menu_item").removeClass("item_color ");
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
  } else if ($(this).scrollTop() < $(".experience").offset().top) {
    $(".menu_item")
      .eq(1)
      .addClass("item_color");
    $(".menu_item")
      .eq(1)
      .siblings()
      .removeClass("item_color ");
    let value = ($(window).scrollTop() - 503) / 2;
    if (value < 90) {
      $(".flip").css({
        transform: `rotate(${value}deg)`
      });
    } else {
      $(".flip").css({
        transform: `rotate(90deg)`
      });
    }

    $(".menu_link").removeClass("link_color ");
    $("nav").addClass("nav_color nav_change");
    $(".logo").addClass("logo_change logo_color");
    $(".menu_item").addClass("item_change");
    $(".menu_link").addClass("link_change");
    $(".hamburger_icon1").addClass("hamburger_color1");
    $(".hamburger_icon2").addClass("hamburger_color2");
    $(".hamburger_icon3").addClass("hamburger_color3");
    $(".submenu").slideUp();
  } else if ($(this).scrollTop() < $(".project").offset().top) {
    $(".menu_item")
      .eq(2)
      .addClass("item_color");
    $(".menu_item")
      .eq(2)
      .siblings()
      .removeClass("item_color ");
    $(".content1")
      .children()
      .addClass("content_slide");
    $(".content2")
      .children()
      .addClass("content_slide");
    $(".flip").css({
      transform: "rotate(90deg)"
    });
  } else if ($(this).scrollTop() < $(".contact").offset().top) {
    $(".menu_item")
      .eq(3)
      .addClass("item_color ");
    $(".menu_item")
      .eq(3)
      .siblings()
      .removeClass("item_color ");
  } else {
    $(".menu_item")
      .eq(4)
      .addClass("item_color ");
    $(".menu_item")
      .eq(4)
      .siblings()
      .removeClass("item_color ");
    $(".submenu").slideUp();
  }
  if (
    $(this).scrollTop() >
    $(".contact").offset().top - $(".project").height()
  ) {
    $(".contact_content").addClass("contact_opa");
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
  $(".menu_item").removeClass("item_color");
  if ($(window).scrollTop() < 500) {
    $("nav").toggleClass("nav_color");
    $(".logo").toggleClass("logo_change");
    $(".hamburger_icon1").toggleClass("hamburger_color1");
    $(".hamburger_icon2").toggleClass("hamburger_color2");
    $(".hamburger_icon3").toggleClass(" hamburger_color3");
  }
});
$(".menu_link").addClass("link_color");
$(".menu_link").addClass("");
$("#menu_link").on("click", function() {
  $(".submenu").slideToggle();
});
$("#ex_link").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: $(".experience").offset().top - 63
    },
    1000
  );
});
$("#skill_link").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: $(".skill").offset().top - 63
    },
    1000
  );
});
$("#contact_link").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: $(".contact").offset().top - 63
    },
    1000
  );
});
$(".logo").on("click", function() {
  $("html,body").animate(
    {
      scrollTop: 0
    },
    1000
  );
  $(".menu_item").removeClass("item_color ");
  $(".menu_link").addClass("link_color ");
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
  $(".menu_link").removeClass("link_color ");
});

//main
