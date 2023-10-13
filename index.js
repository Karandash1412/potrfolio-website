// var slideIndex = 1
// showSlides(slideIndex);

// function showSlides (n){
// slideIndex ++;
// }

// for (i=0; i<4; i++)
// $(".dot")[i].addEventLister("click", function(){
// alert("ffdf");
//     })
var index = 1;

function currentSlide(event){
    if (event === 2){
$("#image1, #image3").each(function (){
    $(this).fadeOut(200);
    $("#image" + event).fadeIn(200);
});
$("#image" + event).addClass("image");
    } else if (event === 3){
        $("#image2, #image1").fadeOut(200);
        $("#image" + event).fadeIn(200);
    } else {
        $("#image2, #image3").fadeOut(200);
        $("#image" + event).fadeIn(200);
    }
// $("image" + event).addClass("image");
}


// $(document).ready(function(){
//     $(".first").click(function(){
//         $(".second, .third").fadeOut();
//     });
//     $(".second").click(function(){
//         $(".first, .third").fadeOut();
//     })
//     $(".third").click(function(){
//         $(".first, .second").fadeOut();
//     })
// })