$(document).ready(function () {

    $('.hamburger').click(function () {
        $(this).toggleClass('active')
        $('nav').toggleClass('active');
        $('body').toggleClass('hidden');

        $('.topics').click(function () {
            $('.topics-dropdown').toggleClass('active');
            if ($('.topics-dropdown').hasClass('active')) {
                $('.topics-dropdown').parentsUntil('.wrapper-header').find('.nav-right').hide().parent().find('.topic-menu').siblings().hide();
            } else {
                $('.topics-dropdown').parentsUntil('.wrapper-header').find('.nav-right').show().parent().find('.topic-menu').siblings().show();
            }
        })

        $('.more').click(function () {
            $('.more-dropdown').toggleClass('active');
            if ($('.more-dropdown').hasClass('active')) {
                $('.more-dropdown').parentsUntil('.wrapper-header').find('.nav-right').hide().parent().find('.more-menu').siblings().hide();
            }
            else {
                $('.more-dropdown').parentsUntil('.wrapper-header').find('.nav-right').show().parent().find('.more-menu').siblings().show();

            }
        })

        $('.register').click(function () {
            $('.manage-subscription').toggleClass('active');
            if ($('.manage-subscription').hasClass('active')) {
                $('.manage-subscription').parentsUntil('.wrapper-header').find('.nav-left').hide().parent().find('.subscription').siblings().hide();
            } else {
                $('.manage-subscription').parentsUntil('.wrapper-header').find('.nav-left').show().parent().find('.subscription').siblings().show();
            }
        })
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