$(document).ready(function(){

    $(".dropdown-content").hide();
    $(".dropbtn").click(function(){
        $(".dropdown-content").toggle();
    });

    $("#c2, #c3").hide();
    $("#t1").css("background-color", "yellow");
    $("#t1").click(function(){
        $("#t1").css("background-color", "yellow");
        $("#t2,#t3").css("background-color", "#f4edd3");

        $("#c1").show();
        $("#c2, #c3").hide();
    });
    $("#t2").click(function(){
        $("#t2").css("background-color", "yellow");
        $("#t1,#t3").css("background-color", "#f4edd3");
        $("#c2").show();
        $("#c1, #c3").hide();
    });
    $("#t3").click(function(){
        $("#t3").css("background-color", "yellow");
        $("#t1,#t2").css("background-color", "#f4edd3");
        $("#c3").show();
        $("#c2, #c1").hide();
    });


  });

//   function myFunction() {
//     var x = document.getElementsByClassName("dropdown-content");
//     if (x.style.backgroundColor === "green") {
//       x.style.backgroundColor = "red";
//     } else {
//       x.style.backgroundColor = "green";
//     }
//   }