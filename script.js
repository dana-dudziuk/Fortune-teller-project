




$("button").click(function(){
    $(".name").hide();
    $(".age").hide();
    $("button").hide();
    $(".steps").hide();
    $(".what").hide();
    $(".how").hide();
    $(".day").hide();
    $("img").show();
    
     var first= $(".name").val();
     var second = parseInt($(".age").val())+20;
     var third=  parseInt($(".steps").val())*7300;
     
    var result;
    result= first+" will be "+ second+" years old and take "+ third+ " steps";
    
    $("p").append(result);
    

    
    




});    
    
    
    
    
    
    
    