$('#info-form').on("submit",
  function(e) {
    var email = $('#email').val();
    var valid_email = /.+@.+/;
    e.preventDefault();
    if(!valid_email.test(email))
    {
      console.log('invalid email');
      $('#invalid').remove();
      $('#form-list').append('<li id="invalid">Please enter a valid email address.</li>');
      return false;
    }
    else
    {
      $(this).remove();
      $('body').append('<h1>Form is submitted!</h1>');
    }
  }
);
