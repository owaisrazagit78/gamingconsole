$(document).ready(function(){

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 410) {
          $("header").addClass('myheader');
          $(".logo-img").attr("src","Tangoline.logo1.png");
        }
  
        else{
            $("header").removeClass('myheader');
            $(".logo-img").attr("src","Tangoline.logo.png");
        }
    });
  
    $('.toggle-btn').click(function(){
        $('nav').toggleClass('mynav');
    });
  
    showSlides();
  });
  
//    arrowup btn 
  $(document).ready(function(){

	$(window).scroll(function(){
		var x = $(document).scrollTop();
		if(x >400){
			$('.arrowbtn').show();
		}
			else{
				$('.arrowbtn').hide();
			}

	});
	$('.arrowbtn').click(function(){
		$(window).scrollTop(0)
	});
		
  });

//   home slider 
  
  var slideIndex = 0;
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 9000); // Change image every 2 seconds
  }
  
  
  var slideIndexs = 1;
  showSlides1(slideIndexs);
  
  function plusSlides(n) {
    showSlides1(slideIndexs += n);
  }
  
  function currentSlide(n) {
    showSlides1(slideIndexs = n);
  }
  
  function showSlides1(n) {
    var i1;
    var slidess = document.getElementsByClassName("mySlidess");
    var dots = document.getElementsByClassName("dot");
    if (n > slidess.length) {slideIndexs = 1}    
    if (n < 1) {slideIndexs = slidess.length}
    for (i = 0; i < slidess.length; i++) {
        slidess[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slidess[slideIndexs-1].style.display = "block";  
    dots[slideIndexs-1].className += " active";
  }
  
  // compare product list 

  
function item1()
{
	var a=document.getElementById('it1').selectedIndex;
	var b=document.getElementById('it2').selectedIndex;

	if(a==b)
	{
		document.getElementById('error').innerHTML="You can't Compare same Products";
		document.getElementById('it1').value="select";
		document.getElementById('img1').src="que.png"
		document.getElementById('pn1').innerHTML="";
		document.getElementById('pp1').innerHTML="";
		document.getElementById('desc1').innerHTML="";

	}
	else if(a==1)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img1').src="compare 1.png";
		document.getElementById('pn1').innerHTML="Casio Loopy";
		document.getElementById('pp1').innerHTML="PKR : 46,400";
		document.getElementById('desc1').innerHTML="The Casio Loopy was a fifth-generation home video console introduced by Casio in 1995. It was only released in Japan. While the system claims to use 32-bit RISC processing, it appeared technically unimpressive due to the nature of the software available.";
		document.getElementById('compare-btn-1').style.display = 'inline-block';
	}
	else if(a==2)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img1').src="compare 2.png";
		document.getElementById('pn1').innerHTML="Nintendo 64";
		document.getElementById('pp1').innerHTML="PKR : 31,999";
		document.getElementById('desc1').innerHTML="The Nintendo 64 is a home video game console developed and marketed by Nintendo. Named for its 64-bit central processing unit, it was released in June 1996 in Japan.  It was the last major home console to use the cartridge as its primary storage.";
		document.getElementById('compare-btn-1').style.display = 'inline-block';
	}	
	
	else if(a==3)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img1').src="compare 3.png";
		document.getElementById('pn1').innerHTML="Playstation 2";
		document.getElementById('pp1').innerHTML="PKR : 14,699";
		document.getElementById('desc1').innerHTML="PS2 sold over 155 million consoles worldwide and had almost 4,000 games released up to late 2013, making it the highest selling and most played console of all time. As well as great games,PS2 boated the birthplace of online gaming, high definition graphics.";
		document.getElementById('compare-btn-1').style.display = 'inline-block';
	}

	else if(a==4)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img1').src="compare 4.png";
		document.getElementById('pn1').innerHTML="Powkiddy X18";
		document.getElementById('pp1').innerHTML="PKR : 21,440";
		document.getElementById('desc1').innerHTML="The POWKIDDY X18 is a cheap Android handheld games console that features a 5.5-inch touchscreen along with numerous physical controls including two joysticks. The X18 has a 5,000 mAh battery, while its design may remind you of some Japanese handheld games consoles.";
		document.getElementById('compare-btn-1').style.display = 'inline-block';
	}
	else if(a==5)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img1').src="compare 5.png";
		document.getElementById('pn1').innerHTML="Playstation 4";
		document.getElementById('pp1').innerHTML="PKR : 47,999";
		document.getElementById('desc1').innerHTML="The PlayStation 4 is an 8th-generation home video game console developed by Sony Interactive Entertainment. The console's controller was also redesigned and improved over the PlayStation 3, with improved buttons and analog sticks, and an integrated touchpad among other changes.";
		document.getElementById('compare-btn-1').style.display = 'inline-block';
	}

	else if(a==6)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img1').src="compare 6.png";
		document.getElementById('pn1').innerHTML="Sega Saturn";
		document.getElementById('pp1').innerHTML="PKR :  12,799";
		document.getElementById('desc1').innerHTML="The Sega Saturn is a 32-bit fifth-generation home video game console developed by Sega and released on November 22, 1994 in Japan, May 11, 1995 in North America. The successor to the successful Sega Genesis, the Saturn has a dual-CPU architecture and eight processors.";
		document.getElementById('compare-btn-1').style.display = 'inline-block';
	}
	
}

function item2()
{	var a=document.getElementById('it1').selectedIndex;
	var b=document.getElementById('it2').selectedIndex;

	if(a==b)
	{
		document.getElementById('error').innerHTML="You can't Compare same Products";
		document.getElementById('it2').value="select";
		document.getElementById('img2').src="que.png";
		document.getElementById('pn2').innerHTML="";
		document.getElementById('pp2').innerHTML="";
		document.getElementById('desc2').innerHTML="";
	}
	else if(b==1)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img2').src="compare 7.png";
		document.getElementById('pn2').innerHTML="Casio Loopy";
		document.getElementById('pp2').innerHTML="PKR : 46,400";
		document.getElementById('desc2').innerHTML="The Casio Loopy was a fifth-generation home video console introduced by Casio in 1995. It was only released in Japan. While the system claims to use 32-bit RISC processing, it appeared technically unimpressive due to the nature of the software available.";
		document.getElementById('compare-btn-2').style.display = 'inline-block';
	}
	else if(b==2)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img2').src="pngItem_175328.png";
		document.getElementById('pn2').innerHTML="Nintendo 64";
		document.getElementById('pp2').innerHTML="PKR : 31,999";
		document.getElementById('desc2').innerHTML="The Nintendo 64 is a home video game console developed and marketed by Nintendo. Named for its 64-bit central processing unit, it was released in June 1996 in Japan.  It was the last major home console to use the cartridge as its primary storage.";
		document.getElementById('compare-btn-2').style.display = 'inline-block';
	}	
	
	else if(b==3)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img2').src="compare 8.png";
		document.getElementById('pn2').innerHTML="Playstation 2";
		document.getElementById('pp2').innerHTML="PKR : 14,699";
		document.getElementById('desc2').innerHTML="PS2 sold over 155 million consoles worldwide and had almost 4,000 games released up to late 2013, making it the highest selling and most played console of all time. As well as great games,PS2 boated the birthplace of online gaming, high definition graphics.";
		document.getElementById('compare-btn-2').style.display = 'inline-block';
	}

	else if(b==4)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img2').src="compare 9.png";
		document.getElementById('pn2').innerHTML="Powkiddy X18";
		document.getElementById('pp2').innerHTML="PKR : 21,440";
		document.getElementById('desc2').innerHTML="The POWKIDDY X18 is a cheap Android handheld games console that features a 5.5-inch touchscreen along with numerous physical controls including two joysticks. The X18 has a 5,000 mAh battery, while its design may remind you of some Japanese handheld games consoles.";
		document.getElementById('compare-btn-2').style.display = 'inline-block';
	}
	else if(b==5)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img2').src="compare 10.png";
		document.getElementById('pn2').innerHTML="Playstation 4";
		document.getElementById('pp2').innerHTML="PKR : 47,999";
		document.getElementById('desc2').innerHTML="The PlayStation 4 is an 8th-generation home video game console developed by Sony Interactive Entertainment. The console's controller was also redesigned and improved over the PlayStation 3, with improved buttons and analog sticks, and an integrated touchpad among other changes.";
		document.getElementById('compare-btn-2').style.display = 'inline-block';
	}

	else if(b==6)
	{
		document.getElementById('error').innerHTML=" ";
		document.getElementById('img2').src="compare 11.png";
		document.getElementById('pn2').innerHTML="Sega Saturn";
		document.getElementById('pp2').innerHTML="PKR :  12,799";
		document.getElementById('desc2').innerHTML="The Sega Saturn is a 32-bit fifth-generation home video game console developed by Sega and released on November 22, 1994 in Japan, May 11, 1995 in North America. The successor to the successful Sega Genesis, the Saturn has a dual-CPU architecture and eight processors.";
		document.getElementById('compare-btn-2').style.display = 'inline-block';
	}
	
	
}
  

			// Brand product card show 
$('.brandepic').click(function(){
	$('#sony').toggle(),
	$('#leneovo').hide()
}),

$('.brandtencent').click(function(){
	$('#lenovo').toggle(),
	$('#sony').hide()
}),
$('.brandsega').click(function(){
	$('#sony').toggle(),
	$('#leneovo').hide()
}),
$('.brandsony').click(function(){
	$('#sony').toggle(),
	$('#leneovo').hide()
}),
$('.brandlenovo').click(function(){
	$('#sony').toggle(),
	$('#leneovo').hide()
}),
$('.brandxbox').click(function(){
	$('#sony').toggle(),
	$('#leneovo').hide()
})