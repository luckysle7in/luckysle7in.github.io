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




// Icons answers

$('.answer_type_icons .answer').on('click', function() {
  $(this).parent().children('.answer').removeClass('active');
  $(this).addClass('active');
  $('.bottom-next a.button').removeClass('button-grey').addClass('button-green').children('.text').text('Next');
})


$('.answer_type_options .answer').on('click', function() {
  if ($(this).parent().hasClass('multiple')) {
    $(this).toggleClass('active');
    $('.bottom-next a.button').removeClass('button-grey').addClass('button-green').children('.text').text('Finish');
  } else {
    $(this).parent().children('.answer').removeClass('active');
    $(this).addClass('active');
    $('.bottom-next a.button').removeClass('button-grey').addClass('button-green').children('.text').text('Next');
  }
})





// Progerss bar for text answer

$('.answer_text textarea').keyup(function(){

  var text = '';
  var icon = '';
  var color = '';
  var progressBar = document.querySelector('.progress-bar');
 
  if ($(this).val().length == 0) {
    icon = '<i class="material-icons md-24">error_outline</i>';
    text = "Recommended minimum 100 characters";
    $(this).parent().children('.progress_bar').children('.indicator').html(icon);
    $(this).parent().children('.progress_bar').children('.description').text(text);
  } else if ($(this).val().length < 100) {
    icon = '<div class="progress-bar"><svg viewPort="0 0 100 100"><circle class="progress-bar-element shadow"></circle><circle class="progress-bar-element progress"></circle></svg></div>';
    text = $(this).val().length + ' / 100 minimun';
    $(this).parent().children('.progress_bar').children('.indicator').html(icon);
    $(this).parent().children('.progress_bar').children('.description').text(text);
    progressBar = document.querySelector('.progress-bar');
    progressBar.style.setProperty('--percent', $(this).val().length);
  } else {
    icon = '<i class="material-icons md-24">check_circle</i>';
    text = "Good review! Enough...";
    $(this).parent().children('.progress_bar').children('.indicator').html(icon);
    $(this).parent().children('.progress_bar').children('.description').text(text);
  }
    
  if ($(this).parent().parent().hasClass('content_step') & $(this).val().length > 99) {
    $('.bottom-next a.button').removeClass('button-grey').addClass('button-green').children('.text').text('Next');
  }
  
})






// Transition to next step

$('.bottom-next a').on('click', function() {
	
  	// Progress bar update
  	if ($('.header_step.active').attr('data-step') == 'start') {
  		$('.progress_bar .step').eq(0).addClass('active');
	} else {
		$('.progress_bar .step.active').next().addClass('active');		
	}
	$('.progress_bar .title').children('span').text($('.content_step.active').next().attr('data-step'));
	
	// Next header step
	if ($('.header_step.active').attr('data-step') == 'start') {
	    $('.header_step.active').removeClass('active').next().addClass('active');
	}
	
	// Next content step
	$('.content_step.active').removeClass('active').next().addClass('active');

	// Hide button at the kast step
	if ($('.content_step.active').attr('data-step') == 'finish') {
		$('.header_step.active').removeClass('active').next().addClass('active');
		$('.bottom-next').hide();
	}

  	// Set next button to SKIP
  	$('.bottom-next a.button').removeClass('button-green').addClass('button-grey').children('.text').text('Skip');

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