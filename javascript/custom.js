(function () {
  var form = $("#example-form");

  form.validate({

    errorPlacement: function errorPlacement(error, element) {
      return true;
    },

    rules: {
      phone: {
        required: true
      },
      name: {
        required: true
      }
    }
  });

  form.children("div").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    labels: {
      next: "Продолжить",
      loading: "Загрузка ..."
    },

    onInit: function () {
      form.find('.actions').after('<div class="steps-counter clearfix">шаг <span>1</span> из 5</div>')
    },

    onStepChanging: function (event, currentIndex, newIndex) {


      if (currentIndex === 0) {
        $('.wizard > .content').css('min-height', 320);
      }

      if (form.valid() && currentIndex === 4 && newIndex === 5) {

          $.post({
            url:"/kitchen/kitchen-lab.php",
            data:form.serialize(),
            success: function() { },
            error: function(jqXHR, textStatus, errorThrown) {
              console.log('error', jqXHR, textStatus, errorThrown);
            }
          });

        $('.steps-counter').remove();
      } else if (form.valid()) {
        $('.steps-counter').find('span').html( parseInt(newIndex) + 1 );
      }


      return form.valid();
    }
  });

  $('.header__apply').on('click', function (evt) {
    evt.preventDefault();
    $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
  });


  var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true
  });

}());