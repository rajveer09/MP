$("button").click(function(){

    $("ul").slideToggle();

});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    stagePadding:50,
    dots:true,
    responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:3
    }
    }
    })

function outputUpdate(vol) {
	document.querySelector('#volume').value = vol;
}
