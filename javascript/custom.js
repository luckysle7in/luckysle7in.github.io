$('.quick-answer-slider-item').on('click', function() {
  $(this).toggleClass('checked');
})
  
$('.rating-star').on('click', function() {
  $('.rating-star').removeClass('star-on').removeClass('hover');
  $('.rating-stars-title').removeClass('hover');
  $('.rating-stars-title').text($(this).attr('data-title'));
  $(this).parent().attr('data-title', $(this).attr('data-title'));
  $(this).parent().attr('data-checked', $(this).index());
  for (var i = 0; i <= $(this).index(); i++) {
     $('.rating-star').eq(i).addClass('star-on');
  }
})	

$('.rating-star').mouseover(function() {
  $('.rating-star').removeClass('star-on').addClass('hover');
  $('.rating-stars-title').addClass('hover');
  $('.rating-stars-title').text($(this).attr('data-title'));
  for (var i = 0; i <= $(this).index(); i++) {
     $('.rating-star').eq(i).addClass('star-on');
  }
})	

$('.rating-star').mouseout(function() {
  $('.rating-star').removeClass('star-on').removeClass('hover');
  $('.rating-stars-title').removeClass('hover');
  $('.rating-stars-title').text($(this).parent().attr('data-title'));
  for (var i = 0; i <= $(this).parent().attr('data-checked'); i++) {
     $('.rating-star').eq(i).addClass('star-on');
  }
})	


$('.question-type-icons-item').on('click', function() {
  $(this).parent().children('.question-type-icons-item').removeClass('active');
  $(this).addClass('active');
  $('.bottom-sticky a.button').removeClass('button-grey').addClass('button-green').children('.text').text('Next');
})


$('.question-type-options-item').on('click', function() {
  if ($(this).parent().hasClass('multiple')) {
    $(this).toggleClass('active');
    $('.bottom-sticky a.button').removeClass('button-grey').addClass('button-green').children('.text').text('Finish');
  } else {
    $(this).parent().children('.question-type-options-item').removeClass('active');
    $(this).addClass('active');
    $('.bottom-sticky a.button').removeClass('button-grey').addClass('button-green').children('.text').text('Next');
  }
})




$('#review_textarea').keyup(function(){
  var text = '';
  var icon = '';
  var color = '';
  var progressBar = document.querySelector('.progress-bar');

  
  if ($(this).val().length == 0) {
    icon = '<i class="material-icons md-24">error_outline</i>';
    text = "Recommended minimum 100 characters";
    $(this).parent().children('.textarea-progress').children('.textarea-progress-indicator').html(icon);
    $(this).parent().children('.textarea-progress').children('.textarea-progress-message').text(text);
  } else if ($(this).val().length < 100) {
    icon = '<div class="progress-bar"><svg viewPort="0 0 100 100"><circle class="progress-bar-element shadow"></circle><circle class="progress-bar-element progress"></circle></svg></div>';
    text = $(this).val().length + ' / 100 minimun';
    $(this).parent().children('.textarea-progress').children('.textarea-progress-indicator').html(icon);
    $(this).parent().children('.textarea-progress').children('.textarea-progress-message').text(text);
    progressBar = document.querySelector('.progress-bar');
    progressBar.style.setProperty('--percent', $(this).val().length);
  } else {
    icon = '<i class="material-icons md-24">check_circle</i>';
    text = "Good review! Enough...";
    $(this).parent().children('.textarea-progress').children('.textarea-progress-indicator').html(icon);
    $(this).parent().children('.textarea-progress').children('.textarea-progress-message').text(text);
  }
  
})







$('.bottom-sticky a').on('click', function() {
	if ($('.intro_step.active').attr('data-step') < 2) {
	    $('.intro_step.active').removeClass('active').next().addClass('active');
	}
	if ($('.content_step.active').attr('data-step') < 6) {
	    $('.content_step.active').removeClass('active').next().addClass('active');
  }
  if ($('.content_step.active').attr('data-step') == 6) {
    $('.intro_step.active').removeClass('active').next().addClass('active');
    $('.bottom-sticky').hide();
  }

  $('.bottom-sticky a.button').removeClass('button-green').addClass('button-grey').children('.text').text('Skip');

	if ($('.content_step.active').attr('data-step') == 2) {
	    $('.question_step').eq(0).addClass('active');
	} else {
	    $('.question_step.active').next().addClass('active');		
	}
  $('.question-stepper-title').children('span').text($('.content_step.active').attr('data-step') - 1);
  
})


















function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}