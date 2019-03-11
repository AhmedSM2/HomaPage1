$(document).ready(function(){
    //test
    $('.Images> div img').click(function(){
        var imageurl = $(this).attr('src');
        $('.test img').attr("src", imageurl);
        //  $('.to-test').show(); 
        $('.test').show(500);
    });
    $('.test, .to-test').click(function(){
        var n = $('.test').css("display");
        $('.to-test').hide(); 
        $('.test').hide(300);
    })

    /* shwo navbar when click icon*/
    $('i.icon').click(function(){
        $('.nav-list').slideToggle()
    });
    
    // when scroll body... sticky navbar
    var checkScroll = false;
    $(window).scroll(function(){
        var sc = $(this).scrollTop();
        if(sc>500){
            $('header').addClass('sticky');

        }
        
        else{
            $('header').removeClass('sticky');

        }
        if(sc>1900 && checkScroll == false){
            // Count to
            $('.timer').countTo();
            checkScroll=true;
           // $(window).off('scroll');
        }
        // scroll top icon
        if(sc>600){
            $('.scrollTop').fadeIn();
        }
        else{
            $('.scrollTop').fadeOut();
        }
    })
    
    // portfolip buttons change
    $('.buttons button').click(function(){
        $(this).addClass('active_bnt').siblings().removeClass('active_bnt');
        var Filter = $(this).attr('id');
        if(Filter==='all'){
          //  $('.Images> div').fadeIn();
            $('.Images> div').slideDown(1000);
        }
        else{
            $('.Images> div').fadeOut();
           // $('.Images').contents().filter('.'+Filter).slideDown(1000);
            $('.Images .'+Filter).slideDown(1000);
        }
    });

    // ------------  carousel ----------------------------
    //Owl team carousel
    $('.owl-team').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    })
    // Owl testimonial carousel
    $('.owl-testimonial').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsiveClass:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    })

    // choose panel
    $('.c_panel li').click(function(){
       var p = $(this).data('role');
       $(this).addClass('active_bnt').siblings().removeClass('active_bnt');
       $('.content > div').slideUp();
       $('.content #'+p).slideDown();
    });

    // pop videos choose section
    $('.pop').magnificPopup({
        type: 'iframe'
        // other options
    });
    // slik slider pleasure section
    $('.slik').slick({
        dots: true,
        speed: 500,
        arrows: false,
        autoplay:true
      });

    //scroll top icon
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },700);
    });

    //smoth scroll 
    $('.nav-list a').click(function(){
        $('body,html').animate({
            scrollTop: $($(this).attr('href')).offset().top -80
        })
    });
    // progress bar
    $('.chart').easyPieChart({
        // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
        barColor: 'red',
        // The color of the track for the bar, false to disable rendering.
        trackColor: '#000',
        // The color of the scale lines, false to disable rendering.
        scaleColor: '#dfe0e0',
        // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
        lineCap: 'round',
        // Width of the bar line in px.
        lineWidth: 5,
        // Size of the pie chart in px. It will always be a square.
        size: 220,
        // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
        animate: 1000,
        // Callback function that is called at the start of any animation (only if animate is not false).
        onStart: $.noop,
        // Callback function that is called at the end of any animation (only if animate is not false).
        onStop: $.noop
        
    });
      
});