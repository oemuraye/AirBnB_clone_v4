$(document).ready(function () {
  let amenityIds = [];

  $('input[type="checkbox"].amenity-checkbox').on('change', function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).is(':checked')) {
      amenityIds.push(amenityId);
    } else {
      amenityIds = amenityIds.filter((id) => id !== amenityId);
    }

    $('div.amenities h4').text(Object.values(amenityIds).map((id) => $('input[type="checkbox"].amenity-checkbox[data-id="' + id + '"]').data('name')).join(', '));
  });
});

