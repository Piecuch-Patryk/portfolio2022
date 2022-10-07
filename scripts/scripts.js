// Toggle header button
let btnState = true; // true == expanded

function toggleEl() {
    $('#btn-header').toggleClass('expanded');
    $('#btn-header').toggleClass('colapsed');
    $('.btn-icon').stop().fadeToggle(300);
    $('.btn-text').stop().fadeToggle(300);
}

function btnInit() {
    const scrollTop = $(window).scrollTop();
    const headerPos = $('header').offset().top + 50;

    if((scrollTop >= headerPos) && (btnState === true)) {
        btnState = false;
        toggleEl();
    }else if((scrollTop <= headerPos) && (btnState === false)) {
        btnState = true;
        toggleEl();
    }
}

function fadeElIn() {
    $('.fadeIn').each((i, el) => {
        setTimeout((i) => {
            $(el).addClass('visible');
            if($(el).hasClass('fadeDown')) {
                $(el).removeClass('fadeDown');
            }
        }, 200 * (i - 1));
    });
}

function cubeInit() {
    var cube = document.querySelector('.cube');
    var radioGroup = document.querySelector('.radio-group');
    var currentClass = '';

    function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    if ( currentClass ) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
    }

    radioGroup.addEventListener( 'change', changeSide );
}

function fixedBgInit() {
    const scrollTop = $(window).scrollTop() / 10;
    $('.bg-img-wrap').css('top', `-${scrollTop}px`);
}


$(document).ready(() => {
    btnInit();
    fadeElIn();
    cubeInit();
});
$(window).scroll(function() {
    btnInit();
    fixedBgInit();
});
// End Toggle header button
