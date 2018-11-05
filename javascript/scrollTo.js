$(document).on('click', 'a[href^="#feat"]', function (event)
{
	"use strict";
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
