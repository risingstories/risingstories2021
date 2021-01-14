$(document).ready(function () {
    const $navi = $('.navibar');
    $('#hamburger-btn').click(function () {
        $(this).toggleClass('open');
        $navi.fadeToggle(500);
    });
    const $naviLink = $navi.find('a');
    $naviLink.click(function () {
        $navi.fadeToggle(500);
    });
});