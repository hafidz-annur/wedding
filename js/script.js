$(window).scroll(function () {
    var wScroll = $(this).scrollTop()

    $("#bg1").css({
        'transform': 'translate(0px, ' + wScroll / 20 + '%)'
    })
    $("#bg2").css({
        'transform': 'translate(0px, ' + wScroll / 40 + '%)'
    })
    $("#bg3").css({
        'transform': 'translate(0px, ' + wScroll / 60 + '%)'
    })
    $("#bg4").css({
        'transform': 'translate(0px, ' + wScroll / 70 + '%)'
    })
})