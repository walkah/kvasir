var currentSlideNo;

$(document).ready(function() {
    if (window.location.hash != "") {
        currentSlideNo = Number(window.location.hash.replace('#', ''));
    } else {
        currentSlideNo = 1;
    }
    
    updateSlides();
    $('.slide .incremental li').addClass('step');
    $(window).bind("keydown", handleBodyKeyDown);
});			      

function handleBodyKeyDown( e ) {
    switch (e.keyCode) {
    case 37:
        prev();
        break;
    case 39:
    case 32:
        next();
        break;
    }
}

function prev () {
    if (currentSlideNo > 1) {
        currentSlideNo--;
    }
    updateSlides();
}

function next () {
    if ($('.slide.current li.step').length > 0) {
        $('.slide.current li.step').first().removeClass('step');    
    } else {
        if (currentSlideNo < $('.slide').length) {
            currentSlideNo++;
        }
        updateSlides();
    }
}

function updateSlides() {
    window.location.hash = currentSlideNo;
    $('.slide').filter(':visible').removeClass('current');
    $('.slide:nth-child(' + currentSlideNo + ')').addClass('current');
}
