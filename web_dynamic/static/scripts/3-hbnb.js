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


$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: (data) => {
      data.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });
      for (const place of data) {
        const article = `
        <article>
          <h2>${place.name}</h2>
          <div class="price_by_night">$${place.price_by_night}</div>
          <div class="information">
            <div class="max_guest">${place.max_guest} Guests</div>
            <div class="number_rooms">${place.number_rooms} Bedrooms</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
          </div>
          <div class="description">
            ${place.description}
          </div>
        </article>`;
        $('section.places').append(article);
      }
    }
});
