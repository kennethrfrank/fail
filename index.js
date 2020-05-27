$(document).ready(function(){

		//Animate Contact

	function emailSlide(){
		$("#cUs").slideUp();
		$("#email").slideDown();

		setTimeout(
			function(){
				$("#email").slideUp();
				$("#cUs").slideDown();
			}
			, 10000);
	}


	$("img#logo").on("click", function(){
		console.log("hello friend");
	});

	$("#cUs.cUs").on("click", function(){
		window.open('mailto:contactnclyne@gmail.com?subject=WebInquiry&body=body');
		emailSlide();

	});

	// $("#cUs.cUs").on("mouseover", function(){
	// 	console.log("hover");
	// 	$("#cUs").slideUp();
	// 	

	// });

	



});