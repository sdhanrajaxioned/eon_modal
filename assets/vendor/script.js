$(document).ready(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass('active')
        $('nav').toggleClass('active');
        $('body').toggleClass('hidden')
    })

    $('.modal-btn').click(function (e) {
        var video_container = $(this).prev();
        video_container.addClass('active')
        var video = $(this).prev().find('video').get(0);
        if (video_container.hasClass('active')) {
            video.play()
            video.currentTime = 0;
            $(video_container).click(function (e) {
                if (e.target === video_container.get(0)) {
                    video_container.removeClass('active')
                    video.pause();
                    video.currentTime = 0;
                }
            });
        }
    })

    $('.modal-close').click(function () {
        var video_container = $(this).parent();
        video_container.removeClass('active');
        var video = $(this).prev().get(0);
        video.pause();
        video.currentTime = 0;
    })

});