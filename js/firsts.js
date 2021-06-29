<<<<<<< HEAD
$(window).scroll(function () {
  let x =  $(window).scrollTop();
 if(x>=20){
     $(".nav1").slideUp(1000 , ()=>{
        $("#collapsibleNavId").addClass("position-fixed");
        $("#nameAwwards").addClass("transition1");
        $("#nameAwwards").text("A.");
     })
  
     


     
 }
 else{
    
        $("#collapsibleNavId").removeClass("position-fixed");
        $("#nameAwwards").addClass("transition1");
        $("#nameAwwards").text("Awwwards");
        
     
    
 }
=======



$("#menuId").click( function(){
  $("#menu").toggle(1000);

})

$("#closeId").click(()=>{
    $("#menu").toggle(1000);
>>>>>>> 88ec1533ceb85b9218460c569a0ec725f9357aca
})