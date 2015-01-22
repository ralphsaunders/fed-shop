$('.add-suffix').on('click', function () {
    var input = $('.new-suffix'),
        text = input.val();

    $.post('/api/suffixes', {
        suffix: text
    }, function (data) {
        console.log(data);
        input.val('');
    });
});

$.get('/api', function (response) {
    $('.default').text(response);
});
$.get('/api', function (response) {
    $('.primary').text(response);
});
$.get('/api', function (response) {
    $('.warning').text(response);
});
