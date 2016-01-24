$(document).ready(function(){


var windowHeight=$(window).height();
var menuBarHeight=$("#menuBar").height();
var codeContainerHeight = windowHeight-menuBarHeight;

$(".codeContainer").height(codeContainerHeight+"px");

$(".toggle").click(function () {
	
$(this).toggleClass("selected");
	var activeDiv=$(this).html();
	$("#"+activeDiv+"Container").toggle();
	  var showingDivs=$(".codeContainer").filter(function(){
		return($(this).css("display")!="none");
	}).length;
	var width=100/showingDivs;
	$(".codeContainer").css("width", width+"%");
});

$(".runButton").click(function(){
	$("#resultFrame").contents().find("html").html("<style>"+$("#cssCode").val()+"</style>"+$("#htmlCode").val());
	
});

$("#small").click(function(event){
    event.preventDefault();
    $(".codeLabel").animate({"font-size":"16px"});
    $(".size").animate({"font-size":"14px", "line-height":"16px"});
    
  });
  
  $("#medium").click(function(event){
    event.preventDefault();
    $(".codeLabel").animate({"font-size":"18px"});
    $(".size").animate({"font-size":"16px", "line-height":"20px"});
    
  });
  
  $("#large").click(function(event){
    event.preventDefault();
    $(".codeLabel").animate({"font-size":"20px"});
    $(".size").animate({"font-size":"18px", "line-height":"20px"});
    
  });
  
  $( ".sizeLabel").click(function() {
   $(".sizeLabel").removeClass("selected");
  $(this).addClass("selected");
  
 });
})