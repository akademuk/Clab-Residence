$(".slider").slick({
  dots: true,
  infinite: true,
  fade: true,
  cssEase: "linear",
});

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: true,
  centerMode: false,
  focusOnSelect: true,
});
