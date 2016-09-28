
$(document).ready(function(){
	$("button").click(function(){
	$.getJSON("source/config.json",function(data, status){
		alert(status);
		alert(data);
	});
//	$.get()
         alert("kkk");
    })
})

