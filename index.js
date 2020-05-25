$(document).ready(function(){

	$("img#logo").on("click", function(){
		console.log("hello friend");
	});

	$("#cUs.cUs").on("mouseover", function(){
		console.log("hover");
		$("#cUs").slideUp();
		$("#email").slideDown();

	});

	



});