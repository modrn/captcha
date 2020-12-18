function setTemplates() {
    $(".templates-slider").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20px'
                }
            },
        ]
    });

    $(".templates .slider-prev").click(function () {
        $(".templates-slider").slickPrev();
    });

    $(".templates .slider-next").click(function () {
        $(".templates-slider").slickNext();
    });

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
}

function setSpecialFeatures() {
    $(".special-features-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800
    });
};

function setCustomers() {
    $(".customers-slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: '<span class="slider-prev glyphicon glyphicon-star"> </span>',
        nextArrow: '<span class="slider-next glyphicon glyphicon-star"> </span>'
    });
};

function showUSD() {
    $("span.usd").show();
    $("span.eur").hide();
    $("span.gbp").hide();

    $('.currencies > button.usd').addClass('active');
    $('.currencies > button.eur').removeClass('active');
    $('.currencies > button.gbp').removeClass('active');
}

function showEUR() {
    $("span.usd").hide();
    $("span.eur").show();
    $("span.gbp").hide();

    $('.currencies > button.usd').removeClass('active');
    $('.currencies > button.eur').addClass('active');
    $('.currencies > button.gbp').removeClass('active');
}

function showGBP() {
    $("span.usd").hide();
    $("span.eur").hide();
    $("span.gbp").show();

    $('.currencies > button.usd').removeClass('active');
    $('.currencies > button.eur').removeClass('active');
    $('.currencies > button.gbp').addClass('active');
}

function initCurrencies() {
    showEUR();

    $("button.usd").click(function () {
        showUSD();
    });

    $("button.eur").click(function () {
        showEUR();
    });

    $("button.gbp").click(function () {
        showGBP();
    });
}

function jump(e) {
    var target;
    if (e) {
        e.preventDefault();
        target = $(this).attr("href");
    } else {
        target = location.hash;
    }

    $('html,body').animate({
            scrollTop: $(target).offset().top
        },
        2000,
        function () {
            location.hash = target;
        });
};

function setScrolling() {
    $('.bscroll[href^=#]').bind("click", jump);
};

$(function () {
    setTemplates();
    setSpecialFeatures();
    setCustomers();
    setScrolling();
    initCurrencies();


});