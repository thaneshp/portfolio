var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: 'https://formspree.io/f/xqkggpvz',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--success">Message sent!</div>');

			//Resets input fields after submission
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');

			//Removes error message after display
			setTimeout(function() {
				$('.alert--success').css('display', 'none');
			}, 4000);
		},
		error: function(err) {
			$contactForm.find('.alert--loading').hide();
			$contactForm.append('<div class="alert alert--error">Oops, there was an error.</div>');

			//Removes error message after display
			setTimeout(function() {
				$('.alert--error').css('display', 'none');
			}, 4000);
		}
	});
});
