$('form input[type=submit]').click(sendForm);

function sendForm(e) {
    if ($('form')[0].checkValidity()) {
        e.preventDefault();
        $.ajax({
            url: "https://tranquil-sierra-86540.herokuapp.com/mykhailodulyba@gmail.com", 
            method: "POST",
            data: {
                name: $('#form-name').val(),
                email: $('#form-email').val(),
                message: $('#form-message').val()
            },
            dataType: "json"
        })
         .done( 
            $('form input[type=submit]').css("background-color", "#4fc54f").val('Message sent'),
            $('#form-name').val(''),
            $('#form-email').val(''),
            $('#form-message').val(''),  );
    }
}

