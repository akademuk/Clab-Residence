var $header_top = $(".header-top");

$("#fullpage").fullpage({
  sectionsColor: ["", "", "#F2AE72", "#5C832F", "#B8B89F"],
  sectionSelector: ".vertical-scrolling",
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
  anchors: [
    "firstSection",
    "secondSection",
    "thirdSection",
    "fourthSection",
    "fifthSection",
  ],
  menu: "#menu",

  onSlideLeave: function (anchorLink, index, slideIndex, direction) {
    if (anchorLink == "fifthSection" && slideIndex == 1) {
      $.fn.fullpage.setAllowScrolling(true, "up");
      $header_top.css("background", "rgba(0, 47, 77, .3)");
      $nav.css("background", "rgba(0, 47, 77, .25)");
    }
  },
});
