$(document).ready(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass('active')
        $('nav').toggleClass('active');
        $('body').toggleClass('hidden')
    })

    function video_toggle() {
        var video_container = document.querySelector('.video-container')
        video_container.classList.toggle('active');
        var video = document.querySelector('video');
        video.pause();
        video.currentTime = 0;
    }

    $('.modal-btn').click(video_toggle);
    $('.modal-close').click(video_toggle);

    // $('.modal-btn').click(function () {
    //     $('.video-container').addClass('active');
    //     var video = $(this).prev().find('video');
    //     // console.log(video)
    //     video.trigger('pause');
    //     video.currentTime = 0;
    // })
    // $('.modal-close').click(function () {
    //     $('.video-container').removeClass('active');
    //     var video = $(this).prev().find('video');
    //     // console.log(video)
    //     video.trigger('pause');
    //     video.currentTime = 0;
    // })
});