// $("#child").parent().css({"color": "blue" , "border":"1px solid red"});
// $("#parent").parent().css({"color":"green" , "border":"1px dotted black"});
// $("#spn1").parents().css({"color":"red" , "border":"1px solid black"});
// $("#1spn").parentsUntil("#1ul").css({"color":"aqua" , "border": "1px solid red"});


// $("#b1").click(function(){
//     $("#child").parent().css({"color": "blue" , "border":"3px solid red"});
// });
// $("#b2").click(function(){
//     $("#child").parents().css({"color":"red" , "border":"3px solid red"});
// });
// $("#b3").click(function(){
//     var msg = "#"+$("#inp").val();
//     if(msg == "#parent" || msg == "#gparent" || msg == "#ggparent" ||msg == "#d1") {
//         $("#child").parentsUntil(msg).css({"color":"orange" , "border": "3px solid red"});
//     }
//     else{
//         alert("Error Input");
//     }
// });



// $("#l1").siblings().css({"color":"blue" , "border":"3px solid grey"});
// $("#l1").next().css({"color":"blue" , "border":"3px solid grey"});
// $("#l1").nextAll().css({"color":"blue" , "border":"3px solid grey"});
// $("#l2").prev().css({"color":"blue" , "border":"3px solid grey"});
// $("#l1").nextUntil("#l4").css({"color":"blue" , "border":"3px solid grey"});


$("#b1").click(function(){
    $("#l1").next().css({"color": "blue" , "border":"3px solid red"});
});
$("#b2").click(function(){
    $("#l1").nextAll().css({"color":"red" , "border":"3px solid red"});
});
$("#b3").click(function(){
    var msg = "#"+$("#inp").val();
    if(msg == "#parent" || msg == "#gparent" || msg == "#ggparent" ||msg == "#d1") {
        $("#l1").nextUntil(msg).css({"color":"orange" , "border": "3px solid red"});
    }
    else{
        alert("Error Input");
    }
});








