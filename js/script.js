$(window).scroll(function () {
    var wScroll = $(this).scrollTop()

    $(".bg1").css({
        'transform': 'translate(0px, ' + wScroll / 20 + '%)',
        'z-index': 1
    })
    $(".bg2").css({
        'transform': 'translate(0px, ' + wScroll / 25 + '%)',
        'z-index': 1
    })
    $(".bg3").css({
        'transform': 'translate(0px, ' + wScroll / 30 + '%)',
        'z-index': 1
    })
    $(".bg4").css({
        'transform': 'translate(0px, ' + wScroll / 35 + '%)',
        'z-index': 1
    })

})