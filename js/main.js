$(document).ready(function(){
$("#loading img").fadeOut(5000 , ()=> {
    $("#loading").fadeOut(1000)
})
let counterone = document.getElementById("counter-counter-one") ;
let countertwo = document.getElementById("counter-counter-two") ;
let counterthird = document.getElementById("counter-counter-third") ;
let counterfour = document.getElementById("counter-counter-four") ;
let Featureoff = $('.Feature').offset().top ;
let Aboutoff = $('.about-us').offset().top ;
let Servoff = $('.services-one').offset().top ;
let owloff = $('.owl-stage-outer').offset().top ;
let unbeatableoff = $('.unbeatable-one').offset().top ;
let healthyoff = $('.healthy-food-one').offset().top ;
let testioff = $('.testimonial-one').offset().top ;
let counteroff = $('.counter-one ').offset().top ;
let projectoff = $('.project-one').offset().top ;
let contactoff = $('.contact-one').offset().top ;
let blogoff = $('.blog-one').offset().top ;
let ctaoff = $('.cta-one').offset().top ;
let footeroff = $('.site-footer').offset().top ;
$(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    let counter1 = 0 ;
    if(scrollTop >= counteroff) {
        function counterOne() {
            counter1+=100 ;
            
            counterone.innerHTML = counter1 ;
            if(counter1 == 1500) 
            {
                clearInterval(clear)
            }
        }
        let clear = setInterval(counterOne  , 500)
        //////////////////////////////////////////////////
        let counter2 = 0 ;
        function counterTwo() {
            counter2+=200 ;
            countertwo.innerHTML = counter2 ;
            if(counter2 == 8800) 
            {
                clearTimeout(x)
            }
        }
        let x = setInterval(counterTwo  , 100)
        // 
        let counter3 = 0 ;
        function counterThird() {
            counter3+=200 ;
            counterthird.innerHTML = counter3 ;
            if(counter3 == 7000) 
            {
                clearTimeout(xy)
            }
        }
        let xy = setInterval(counterThird  , 100);
        //////////////////
        
        let counter4 = 0 ;
        function counterFour() {
            counter4+=100 ;
            counterfour.innerHTML = counter4 ;
            if(counter4 == 9100) 
            {
                clearTimeout(z)
            }
        }
        let z = setInterval(counterFour , 100);
    }
    if(scrollTop == Featureoff-190) {
        $('.Feature').css("opacity","1");
        $('.Feature').css("margin-right","0");
        $('.Feature').css("transition","0.6s");
    }
    if(scrollTop > Aboutoff-190) {
        $('.about-us').css("opacity","1");
        $('.about-us').css("margin-right","0");
        $('.about-us').css("transition","0.8s");
     
    } 
    if(scrollTop > Servoff-190) {
        $('.services-one').css("opacity","1");
        $('.services-one').css("margin-right","0");
        $('.services-one').css("transition","0.8s");
      
    } 
    if(scrollTop < owloff) {
        
        $('.owl-stage-outer').css("opacity","1");
        $('.owl-stage-outer').css("margin-right","0");
        $('.owl-stage-outer').css("transition","0.8s");
     
    } 
    if(scrollTop < unbeatableoff) {
        $('.unbeatable-one').css("opacity","1");
        $('.unbeatable-one').css("margin-right","0");
        $('.unbeatable-one').css("transition","0.8s");
   
    } 
    if(scrollTop < healthyoff) {
        $('.healthy-food-one').css("opacity","1");
        $('.healthy-food-one').css("margin-right","0");
        $('.healthy-food-one').css("transition","0.8s");
    
    } 
    if(scrollTop < testioff) {
        $('.testimonial-one').css("opacity","1");
        $('.testimonial-one').css("margin-right","0");
    } 
    if(scrollTop < counteroff) {
        $('.counter-one ').css("opacity","1");
        $('.counter-one ').css("margin-right","0");
        $('.counter-one ').css("transition","0.8s");
    } 
    if(scrollTop < projectoff) {
        $('.project-one').css("opacity","1");
        $('.project-one ').css("margin-right","0");
        $('.project-one ').css("transition","0.8s");
    } 
    if(scrollTop < contactoff) {
        $('.contact-one').css("opacity","1");
        $('.contact-one ').css("margin-right","0");
        $('.contact-one ').css("transition","0.8s");
    } 
    if(scrollTop < blogoff) {
        $('.blog-one').css("opacity","1");
        $('.blog-one ').css("margin-right","0");
        $('.blog-one ').css("transition","0.8s");
    }
    if(scrollTop < ctaoff) {
        $('.cta-one').css("opacity","1");
        $('.cta-one ').css("margin-right","0");
        $('.cta-one ').css("transition","0.8s");
       
    } 
    if(scrollTop < footeroff) {
        $('.site-footer').css("opacity","1");
        $('.site-footer ').css("margin-right","0");
        $('.site-footer ').css("transition","0.8s");
      
    } 

});
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    smartSpeed: 500,
    autoplayTimeout: 1000 ,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

})
