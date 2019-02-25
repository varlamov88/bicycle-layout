import "jquery";
import "jquery.mmenu";
import "jquery-validation";
import 'owl.carousel';
import "../scss/style.scss";

$(document).ready(function(){
	$("#mobile-nav").mmenu({
       "slidingSubmenus": true,
       "extensions": [
          "pagedim-black",
          "theme-dark"
       ]
    });

    $("#subscribe__form").validate({
      rules: {
        email: {
          required: true,
          email: true
        }
      },
      errorPlacement: function() {
        return;
      },
      submitHandler: function(form) {
        $(form).find('.form__success-message').addClass('show');
        $(form).find('.form__inner').hide();
        //form.submit();
      }
    });

	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true
	});
});