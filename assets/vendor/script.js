$(document).ready(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass('active')
        $('nav').toggleClass('active');
        $('body').toggleClass('hidden');

        $('.topics').click(function () {
            $('.topics-dropdown').slideToggle();
        })

        $('.more').click(function () {
            $('.more-dropdown').slideToggle();
        })

        $('.register').click(function () {
            $('.manage-subscription').slideToggle();
        })
    })

    $('.modal-btn').click(function (e) {
        var modal_data = $(this).attr('data-modal');
        var video_container = $('.video-container');
        video_container.addClass('active');

        if (video_container.hasClass('active')) {
            $('video').each(function () {
                var video = $(this);
                if (video.attr('data-video') === modal_data) {
                    video.siblings('video').hide();
                    video.get(0).play()
                    video.get(0).currentTime = 0
                    $(video_container).click(function (e) {
                        if (e.target === video_container.get(0)) {
                            video_container.removeClass('active')
                            video.get(0).pause();
                            video.get(0).currentTime = 0;
                        }
                    });
                    $('.modal-close').click(function () {
                        // var video_container = $(this).parent();
                        video_container.removeClass('active');
                        // var video = $(this).prev().get(0);
                        video.get(0).pause();
                        video.get(0).currentTime = 0;
                    })

                } else {
                    video.siblings('video').show();
                }
            })
        }
    })



    $('.read-btn').click(function () {
        $(this).parent().find('.read-more').fadeToggle('800');
        if ($(this).text() === 'Read More') {
            $(this).text('Read Less')
        } else {
            $(this).text('Read More')
        }
    })
});