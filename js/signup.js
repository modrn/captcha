function initSignup() {
    $('#signup-form').bootstrapValidator({
        live: 'submitted',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            required: 'glyphicon glyphicon-asterisk',
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                group: '.name-group',
                message: 'The name you entered is not valid',
                validators: {
                    notEmpty: {
                        message: 'Name is required and cannot be empty'
                    }
                }
            },
            email: {
                group: '.email-group',
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'Email address is not a valid'
                    }
                }
            },
            phone: {
                group: '.phone-group',
                validators: {
                    notEmpty: {
                        message: 'The phone is required and cannot be empty'
                    },
                    stringLength: {
                        min: 7,
                        message: 'Phone must have at least 7 characters'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        var action = $form.attr('action');

        console.log(action + ' ' + $form.serialize());
        setTimeout(function() {
            alert("post started started");

            $.post(action, $form.serialize(), function (result) {
                if (result.CaptchaIsValid == true) {
                    location.href = 'thankyou.html';
                } else {
                    location.href = 'index2.html';   
                }
            });    
        }, 2000);
    });
}

$(function () {
    initSignup();
})