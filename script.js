$(document).ready(function(){
    $('#bbb').hover(function(){
        $(this).animate({color:'red'},1000);
        });
    });



$(document).ready(function(){
    $('.click').click(function(){
  		$(this).toggleClass('clicked');
			});
    });



function showDiv() {
   document.getElementById('welcomeDiv').style.display = "block";
};