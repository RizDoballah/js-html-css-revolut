$(document).ready(
  function() {
    $('.parent-dropdown > a').mouseover(
    function() {
      $(this).next('.dropdown').toggleClass('active');
      }
    );
    $('.parent-dropdown > a').click(
      function() {
        $(this).next('.dropdown').toggleClass('active');
      }
    );
  }
);
