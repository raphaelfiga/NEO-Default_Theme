/**
 * Módulo Mega Menu
 * Montagem do Mega Menu
 */

document.addEventListener("touchstart", function () {
}, false);

$(function () {

    $('#wsnavtoggle').click(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
        $('.pusher').toggleClass('dimmed');
        $('.wsmain').toggleClass('ui simple sidebar fixed inverted vertical menu left uncover visible');
    });
    $('.dimmed').click(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
        $('.pusher').toggleClass('dimmed');
    });
    $('.wsmenu-list > li').has('.wsmenu-submenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow icon angle down"></i></span>');
    $('.wsmenu-list > li').has('.wsshoptabing').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow icon angle down"></i></span>');
    $('.wsmenu-list > li').has('.megamenu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow icon angle down"></i></span>');
    $('.wsmenu-click, .wsmenu-list > li > a').click(function () {
        $(this).toggleClass('ws-activearrow').parent().siblings().children().removeClass('ws-activearrow');
        $(".wsmenu-submenu, .megamenu").not($(this).siblings('.wsmenu-submenu, .megamenu')).slideUp('slow');
        $(this).siblings('.wsmenu-submenu').slideToggle('slow');
        $(this).siblings('.megamenu').slideToggle('slow');
    });
    $('.wsmenu').swipeleft(function () {
        $('.pusher').toggleClass('wsoffcanvasopener');
    });
});