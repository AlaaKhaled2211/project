// /// <reference path="../globals/jquery/index.d.ts" />
// //jQuery >> js library

// //write less do more

// // let div = document.getElementById('demo');

// // div.style.width = '0px';
// // div.style.height = '0px';
// // div.style.margin = '0px';
// // div.style.padding = '0px';
// // div.style.opacity = '0';
// // div.style.transition = 'all 30s';

// /**
//  * //effects
//  *
//  *  $('#demo').hide(30000);
//  *  $("#demo").show(3000);
//  *  $("#demo").toggle(3000);
//  *
//  *
//  * $("#demo").slideUp(3000);
//  *  $("#demo").slideDown(3000);
//  * slideToggle(3000);
//  *
//  * fadeIn(3000);
//  *  $("#demo").fadeOut(3000);
//  *   $("#demo").fadeToggle(3000);
//  * fadeTo(3000,.5);
//  *
//  * // $('#demo').hide(3000).slideDown(4000).slideUp(5000); //chaining
//  * 
//  * //callbabcks
//  * 
//  * 
//     // $('#demo1').slideUp(3000 , function(){

//     //     $('#demo2').slideUp(3000 , function(){

//     //         $('#demo3').slideUp(3000);

//     //     });

//     // });
//  *
//  *
//  *
//  *
//  *
//  */

// let div = $("#demo");

// $(".btn").click(function (e) {
 
// //   $("#demo1").animate(
// //     {
// //       width: "+=100px",
// //       height: "500px",
// //       borderRadius: "50%",
      
// //     },
// //     5000
// //   );


// // $('#demo1').animate({width:'500px'},2000);
// // $('#demo1').animate({height:'500px'},2000);
// // $('#demo1').animate({borderRadius:'50%'},2000)



// // $('#demo1').delay(2000).animate({width:'500px'},2000).animate({height:'500px'},2000).animate({borderRadius:'50%'},2000);



// // $('#demo1').animate({width:"500px"},3000 , function(){
// //     $('#demo2').animate({width:"600px"},3000 , function(){
// //         $('#demo3').animate({width:"700px"},3000)
// //     })
// // })



// });

// let h1s = $("h1");




$('section').animate({width:'100%',},2000)
$('section').animate({height:'100%',},2000 , function(){
    $('h1').fadeIn(2000 , function(){
        $('.item').slideDown(2000)
    })
})

