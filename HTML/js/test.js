
$(document).ready(function(){
	$("button").click(function(){
	$.getJSON("https://www.travelchinaguide.com/inc/app/chinaTours/public/config.json",function(data, status){
		alert(status);
		alert(data);
	});
//	$.get()
         alert("kkk");
    })
})

