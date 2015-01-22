$('.add-suffix-btn').on('click', function(){
	var text = $('#suffix-text').val();

	$.post('/api/suffixes', {
		suffix: text
	}, function(data){
		console.log(data);
		$('#suffix-text').val('')
	});
});



$.get('/api', function(response) {
	$('.random-btn').text(response);
});