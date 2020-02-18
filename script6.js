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
