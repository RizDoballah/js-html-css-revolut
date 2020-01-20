$(document).ready(
  function() {
    $('.parent-dropdown > a').mouseover(
      function() {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
