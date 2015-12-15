jQuery(function($) {

	//activate tooltips
	$('[data-toggle="tooltip"]').tooltip(); 

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});


	//"open all" and "close all" buttons on careers page
        $('.fs-openall').click(function(e){
          $('.panel-collapse.in')
            .collapse('hide');
            e.preventDefault();
        });
        $('.fs-openall').click(function(e){
          $('.fs-collapse:not(".in")')
            .collapse('show');
            e.preventDefault();
        });
        $('.fr-openall').click(function(e){
          $('.panel-collapse.in')
            .collapse('hide');
            e.preventDefault();
        });
        $('.fr-openall').click(function(e){
          $('.fr-collapse:not(".in")')
            .collapse('show');
            e.preventDefault();
        });
        $('.mf-openall').click(function(e){
          $('.panel-collapse.in')
            .collapse('hide');
            e.preventDefault();
        });
        $('.mf-openall').click(function(e){
          $('.mf-collapse:not(".in")')
            .collapse('show');
            e.preventDefault();
        });  	


	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});	


});