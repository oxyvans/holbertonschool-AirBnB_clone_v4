window.addEventListener('DOMContentLoaded', (event) => {
  let res = [];
  $('input:checkbox').change(function() {
  if ($(this).is(":checked")) {
    const x = ($(this).attr('data-name'));
    res.push(x);
  } else {
    const n = ($(this).attr('data-name'));
    const indx = array.indexOf(n);
    res.splice(indx, 1);
  }
  $('.amenities > h4').text(res.join(', '));
  });
});
 $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status == 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
