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
})