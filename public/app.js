$('.add-suffix-button').on('click', function () {
    // get reference to text in input
    var input = $('#suffix-text');
    var text = input.val();

    // send post request to API
    // looks like:
    // { suffix: 'sausage' }
    // logs out response, clears input
    $.post('/api/suffixes', {
        suffix: text
    }, function (data) {
        console.log(data);
        input.val('');
    });
});

$.get('/api', function (response) {
    $('.random-button').text(response);
});
