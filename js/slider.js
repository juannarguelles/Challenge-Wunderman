function createSlick(){  
	$(".carousel__inner").not('.slick-initialized').slick({
		centerMode: true,
	    autoplay: true,
	    dots: true, 
        arrows: true,
  		slidesToShow: 3,
	    responsive: [{ 
	        breakpoint: 768,
	        settings: {
	            dots: false,
	            arrows: false,
	            infinite: true,
	            slidesToShow: 1,
	            slidesToScroll: 1
	        } 
	    }]
	});	
} 
createSlick();
$(window).on( 'resize', createSlick );