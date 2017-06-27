$(document).ready(function () {
  $(document).foundationNavigation();

  $('.menu-button').click(function (event) {
    event.preventDefault();

    $('.main-nav').toggleClass('active');
  });
});
