window.addEventListener("load", function() {
  $(".loading").addClass("loading_dis");
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
  if ($(this).scrollTop() < $(".box").offset().top - 100) {
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

  if ($(window).scrollTop() < $(".box").offset().top) {
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
  $("html,body").animate(
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
//const show = document.getElementById("show");
//const xhr = new XMLHttpRequest();
$(".work_name li:nth-child(1)").addClass("li_color");

$(".work_name li:nth-child(2)").on("click", function() {
  $(this).addClass("li_color");
  $(this)
    .siblings()
    .removeClass("li_color");
  $.ajax({
    type: "GET",
    url: "ps.html",
    dataType: "text",
    success: function(data) {
      $("#show").html(data);
    }
  });
  /*$.ajax({
    url: "ps.html",
    cache: false
  }).done(function(html) {
    $("#show").html(html);
  });*/
  /*xhr.open("GET", "./ps.html");
  xhr.onload = function() {
    show.innerHTML = this.responseText;
  };
  xhr.send();*/
});
$(".work_name li:nth-child(3)").on("click", function() {
  $(this).addClass("li_color");
  $(this)
    .siblings()
    .removeClass("li_color");
  $.ajax({
    type: "GET",
    url: "ae.html",
    dataType: "text",
    success: function(data) {
      $("#show").html(data);
    }
  });
});
$(".work_name li:nth-child(1)").on("click", function() {
  $(this).addClass("li_color");
  $(this)
    .siblings()
    .removeClass("li_color");
  $.ajax({
    type: "GET",
    url: "ai.html",
    dataType: "text",
    success: function(data) {
      $("#show").html(data);
    }
  });
});

$(".img_part")
  .children()
  .on("click", function() {
    const src = $(this)
      .find("img")
      .attr("src");
    const wid = $(this)
      .find("img")
      .attr("width");
    $(".work_detail")
      .find("img")
      .attr({
        src: src,
        width: "100%"
      });
    $(".work_detail").fadeIn();
    $(".work_shield").fadeIn();
    $("html,body").animate(
      {
        scrollTop: $(".box").offset().top
      },
      1000
    );
  });

$(".work_shield").on("click", function() {
  $(".work_detail").fadeOut();
  $(this).fadeOut();
});
