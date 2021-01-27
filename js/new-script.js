$(window).scroll(function () {
    var wScroll = $(this).scrollTop()
    console.log(wScroll)

    $(".bg1").css({
        'transform': 'translate(0px, ' + wScroll / 20 + '%)',
        'z-index': 1
    })
    $(".bg2").css({
        'transform': 'translate(0px, ' + wScroll / 40 + '%)',
        'z-index': 1
    })
    $(".bg3").css({
        'transform': 'translate(0px, ' + wScroll / 60 + '%)',
        'z-index': 1
    })
    $(".bg4").css({
        'transform': 'translate(0px, ' + wScroll / 70 + '%)',
        'z-index': 1
    })

    $(".couple1").css({
        'transform': 'translate(-' + wScroll / 10 + 'px, ' + '0px)'
    })

    $("#couple2").css({
        'transform': 'translate(' + wScroll / 10 + 'px, ' + '0px)'
    })


})