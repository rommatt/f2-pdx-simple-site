$(function() {
  $('button').click(function() {
    var lectureUrl = $(this).attr('id');

    $.get('http://localhost:3000/course', function(response) {
      $('#quote-text').text(response);
    })
  });
});
