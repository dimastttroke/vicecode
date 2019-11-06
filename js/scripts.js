$(document).ready(function() {

    $('.js-open-modal').on('click', function(e) {
        e.preventDefault();
        $('.main-container').addClass('modal-open');
        $('.modal').addClass('open');
        $('.bg-blur').addClass('open');
    });
    $('.js-close-modal, .bg-blur').on('click', function(e) {
        e.preventDefault();
        $('.main-container').removeClass('modal-open');
        $('.modal').removeClass('open');
        $('.bg-blur').removeClass('open');
    });

    //Phone mask
    $(".phone-mask").mask("9 (999) 999-99-99");

    if ($(window).width() > 1024) {

        //Button gradient
        var docStyle = document.documentElement.style;
        var aElem = document.getElementById("js-move");
        var boundingClientRect = aElem.getBoundingClientRect();
        aElem.onmousemove = function(e) {
            var x = e.clientX - boundingClientRect.left;
            var y = e.clientY - boundingClientRect.top;
            var xc = boundingClientRect.width / 2;
            var yc = boundingClientRect.height / 2;
            var dx = x - xc;
            var dy = y - yc;
            docStyle.setProperty('--rx', "".concat(dy / -1, "deg"));
            docStyle.setProperty('--ry', "".concat(dx / 10, "deg"));
        };
        aElem.onmouseleave = function(e) {
            docStyle.setProperty('--ty', '0');
            docStyle.setProperty('--rx', '0');
            docStyle.setProperty('--ry', '0');
        };
        aElem.onmousedown = function(e) {
            docStyle.setProperty('--tz', '-25px');
        };
        document.body.onmouseup = function(e) {
            docStyle.setProperty('--tz', '-12px');
        };

        //Button gradient 2
        var docStyle2 = document.documentElement.style;
        var aElem2 = document.getElementById("js-move2");
        var boundingClientRect2 = aElem2.getBoundingClientRect();
        aElem2.onmousemove = function(e) {
            var x2 = e.clientX - boundingClientRect2.left;
            var y2 = e.clientY - boundingClientRect2.top;
            var xc2 = boundingClientRect2.width / 2;
            var yc2 = boundingClientRect2.height / 2;
            var dx2 = x2 - xc2;
            var dy2 = y2 - yc2;
            docStyle2.setProperty('--rx2', "".concat(dy2 / -1, "deg"));
            docStyle2.setProperty('--ry2', "".concat(dx2 / 10, "deg"));
        };
        aElem2.onmouseleave = function(e) {
            docStyle2.setProperty('--ty2', '0');
            docStyle2.setProperty('--rx2', '0');
            docStyle2.setProperty('--ry2', '0');
        };
        aElem2.onmousedown = function(e) {
            docStyle2.setProperty('--tz2', '-25px');
        };
        document.body.onmouseup = function(e) {
            docStyle2.setProperty('--tz2', '-12px');
        };

        //Button gradient 3
        var docStyle3 = document.documentElement.style;
        var aElem3 = document.getElementById("js-move3");
        var boundingClientRect3 = aElem3.getBoundingClientRect();
        aElem3.onmousemove = function(e) {
            var x3 = e.clientX - boundingClientRect3.left;
            var y3 = e.clientY - boundingClientRect3.top;
            var xc3 = boundingClientRect3.width / 2;
            var yc3 = boundingClientRect3.height / 2;
            var dx3 = x3 - xc3;
            var dy3 = y3 - yc3;
            docStyle3.setProperty('--rx3', "".concat(dy3 / -1, "deg"));
            docStyle3.setProperty('--ry3', "".concat(dx3 / 10, "deg"));
        };
        aElem3.onmouseleave = function(e) {
            docStyle3.setProperty('--ty3', '0');
            docStyle3.setProperty('--rx3', '0');
            docStyle3.setProperty('--ry3', '0');
        };
        aElem3.onmousedown = function(e) {
            docStyle3.setProperty('--tz3', '-25px');
        };
        document.body.onmouseup = function(e) {
            docStyle3.setProperty('--tz3', '-12px');
        };

        //Hovers on phones items
        $('.phones__item').mouseenter(function() {
            var bgClass = $(this).data('bgclass'),
                phonesContent = $(this).find('.phones__content'),
                title = $(this).find('.phones__name'),
                info = $(this).find('.phones__info'),
                titleSecond = $(this).find('.phones__subname');
            $(title).css('opacity', '0');
            $(info).addClass('hover').css({ "bottom": "-110px", "background": "transparent" });
            $(phonesContent).prepend('<div class="' + bgClass + '" style="height: -100%;"></div>');
            $(titleSecond).show();
            var bg = $(this).find('.phones__bg');
            $(bg).animate({
                top: "0"
            }, 500);
        });

        $('.phones__item').mouseleave(function() {
            var title = $(this).find('.phones__name');
            var info = $(this).find('.phones__info');
            var bg = $(this).find('.phones__bg');
            var titleSecond = $(this).find('.phones__subname');
            $(title).css('opacity', '1');
            $(info).removeClass('hover').css({ "bottom": "0px", "background": "#fff" });
            $(titleSecond).hide();
            $(bg).animate({
                top: "100%"
            }, 500, function() {
                $(bg).remove();
            });
        });

        //Hovers on left block
        $('.content__main, .header__logo').mouseenter(function() {
            var bg = $('.bg-main');
            var blockWidth = $('.content__main').width();
            var blockOffsetLeft = $('.content__main').offset().left;
            var totalWidthBg = blockWidth + blockOffsetLeft;
            $(bg).css('width', totalWidthBg).css('left', '0%');
        });
        $('.content__main, .header__logo').mouseleave(function() {
            var bg = $('.bg-main');
            $(bg).css('left', '-100%');
        });

    }

});