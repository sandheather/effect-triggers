 $('.btn-show-hide').on('click', function () {
  $('.box').toggleClass('show');
});

  $('.btn-move').on('click', function () {
  	$('.diamond').toggleClass('slide');
});

  $('.btn-collapse-expand').on('click', function () {
  	$('.panel').toggleClass('collapse');
});

  $('.btn-bounce').on('click', function () {
  	$('.circle').addClass('bounce');
});

  $('.circle').on('click', function () {
  	$('.circle').removeClass('bounce');
});

  $('.btn-append').on('click', function () {
  $('.list').toggleClass('<li>New List Item</li>');
});
