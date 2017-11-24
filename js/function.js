$(document).ready(function(){
    $("p.price").hover(function(){
        $(this).addClass("green");
        }, function(){
        $(this).removeClass("green");
    });
    $("figcaption.title-product").hover(function(){
        $(this).addClass("title-product2");
        }, function(){
        $(this).removeClass("title-product2");
    });
});
