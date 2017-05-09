

// Activate Next Step

$(document).ready(function() {

    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e)
    {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li');

        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
        }
    });

    $('ul.setup-panel li.active a').trigger('click');

    $('#activate-step-2').on('click', function(e) {
        $('ul.setup-panel li:eq(1)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $(this).hide();
        return false

    });
    $('.heztwo').on('click', function(e) {
        $('ul.setup-panel li a[href="#step-1"]').trigger('click');
        $('#activate-step-2').show();

    });

    $('#activate-step-3').on('click', function(e) {
        $('ul.setup-panel li:eq(2)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $('#activate-step-3').hide();
        return false
    });
    $('.hezfour').on('click', function(e) {
        $('ul.setup-panel li a[href="#step-2"]').trigger('click');
        $('#activate-step-3').show();
    });

    $('#activate-step-4').on('click', function(e) {
        $('ul.setup-panel li:eq(3)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');
        $(this).hide();
        return false
    });
    $('.hezfive').on('click', function(e) {
        $('ul.setup-panel li a[href="#step-3"]').trigger('click');
        $('#activate-step-4').show();
    });

    $('#activate-step-5').on('click', function(e) {
        $('ul.setup-panel li:eq(4)').removeClass('disabled');
        $('ul.setup-panel li a[href="#step-5"]').trigger('click');

    });

    $('.hezsix').on('click', function(e) {
        $('ul.setup-panel li a[href="#step-4"]').trigger('click');

    });

    $('.howitwork').on('click' , function () {
        $('.divkolel').fadeOut(0);
        $('.step2').fadeIn(0);
    });
    $('.hathel').on('click' , function () {
        $('.divkolel').fadeOut(0);
        $('.step2').fadeOut(0);

        $('.step3').fadeIn(0);
    });
    $('.next').on('click' , function () {
        $('.step3').fadeOut(0);
        $('.step4').fadeIn(0);
    });
    $('.not').on('click' , function () {
        $('.step4').fadeOut(0);
        $('.step5').fadeIn(0);
    });
    $('.submit').on('click' , function () {
        $('.step5').fadeOut(0);
        $('.multi').fadeIn(0);
        $('.hez').fadeOut(0);
    });

    $('#mobilesubmit').on('click' , function () {
        $('.step5').fadeOut(0);
        $('#mobileshlav').css('display' , 'block');
    });

    $("#big input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(".l3").css('color' , '#f36f21');
            $(this).parent().addClass("orangeBackground");
        }else{
            $(this).parent().removeClass("orangeBackground");
            $(".l3").css('color' , '#80787f');
        }
    });
    $("#regular input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(".l2").css('color' , '#f36f21');
            $(this).parent().addClass("orangeBackground2");
        }else{
            $(this).parent().removeClass("orangeBackground2");
            $(".l2").css('color' , '#80787f');
        }
    });
    $("#kompact input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(".l1").css('color' , '#f36f21');
            $(this).parent().addClass("orangeBackground3");
        }else{
            $(this).parent().removeClass("orangeBackground3");
            $(".l1").css('color' , '#80787f');
        }
    });
    $("#nemuha input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(".l4").css('color' , '#f36f21');
            $(this).parent().addClass("orangeBackground4");
        }else{
            $(this).parent().removeClass("orangeBackground4");
            $(".l4").css('color' , '#80787f');
        }
    });
    $("#mekura input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(".l5").css('color' , '#f36f21');
            $(this).parent().addClass("orangeBackground5");
        }else{
            $(this).parent().removeClass("orangeBackground5");
            $(".l5").css('color' , '#80787f');
        }
    });
    $("#nehim input[type='checkbox']").change(function(){
        if($(this).is(":checked")){
            $(".l6").css('color' , '#f36f21');
            $(this).parent().addClass("orangeBackground6");
        }else{
            $(this).parent().removeClass("orangeBackground6");
            $(".l6").css('color' , '#80787f');
        }
    });
    $('.shaar').click(function () {
        $(this).toggleClass("shaarkatom");
        $('.neelam').toggleClass('havegate');
        $('.einshaar').removeClass('shaarkatom');
        $('.overflow').css('overflow-y', 'scroll');
        // $('.overflow').scrollTop($('.overflow')[0].scrollHeight);
        $(".overflow").animate({ scrollTop: $('.overflow').prop("scrollHeight")}, 1000);
    });
    $('.einshaar').click(function () {
        $(this).toggleClass("shaarkatom");
        $('.shaar').removeClass('shaarkatom');
        $('.neelam').removeClass('havegate');
        $('.overflow').css('overflow-y', 'hidden');
    });

    $('#withphone').click(function () {
        $(this).toggleClass("shaarkatom");
        $('#stephone').toggleClass('havegate');
        $('#manual').removeClass('shaarkatom');
        $('#control').removeClass('shaarkatom');
        $(".overflow").animate({ scrollTop: $('.overflow').prop("scrollHeight")}, 1000);

    });

    $('#manual').click(function () {
        $(this).toggleClass("shaarkatom");
        $('#withphone').removeClass('shaarkatom');
        $('#stephone').removeClass('havegate');
        $('#control').removeClass('shaarkatom');
    });
    $('#control').click(function () {
        $(this).toggleClass("shaarkatom");
        $('#withphone').removeClass('shaarkatom');
        $('#stephone').removeClass('havegate');
        $('#manual').removeClass('shaarkatom');
    });


    $('#activate-step-3').on('click' , function () {
        $('.secondpage').fadeOut(0);
        $('.secondpage2').fadeIn(0);

    });

    $('.verinumer').on('click' , function () {
        $('.neelam').fadeOut(10);
        $('.btndiv2').fadeOut(10);
        $('.vi').fadeIn(10)
    });

    $('#done-steps').on('click', function () {
        $('.multi').fadeOut(0);
        $('#step-5').fadeOut(0);
        $('.lastdiv').fadeIn(0);
    });
    
    $('#harshama').on('click', function () {
        $('.step2').fadeOut(0);
        $('.step3').fadeOut(0);
        $('.divkolel').fadeIn(0);

    });

    $('#imutmispar').on('click' , function () {
        $('.step3').fadeIn(0);
        $('.step4').fadeOut(0);
    });
    $('#zehumispar').on('click' , function () {
        $('.step4').fadeIn(0);
        $('.step5').fadeOut(0);
    });
    $('#pirtihanay').on('click' , function () {
        $('.step5').fadeIn(0);
        $('.multi').fadeOut(0);
    });
    $('#skip').on('click', function () {
        $('.multi').fadeOut(0);
        $('#step-5').fadeOut(0);
        $('.lastdiv').fadeIn(0);
    });
    
    $('.heznew').on('click' , function () {
        $('.step5').fadeIn(0);
        $('.multi').fadeOut(0);
        $('.hez').fadeIn(0);
    })
});
