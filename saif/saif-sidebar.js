$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = true;
        }
    }



    $('[data-toggle="offcanvas"]').click(function () {

        $('#wrapper').toggleClass('toggled');

    });  

    if (window.innerWidth > 280) {
        $('#wrapper').removeClass('toggled');
        hamburger_cross()
    }
    else {
        $('#wrapper').addClass('toggled');
    }
});