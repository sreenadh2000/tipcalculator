  var a = $("#persons_count").on("input",function(){
total();
});

// calling  input function.....

function total(){
  // input value location...........
   var bill = $("#bill_value").val();
var custom = $("#tip_value").val();
var persons = $("#persons_count").val();

// conditions are applied..........

if ( bill === "" || bill ==0){
  var bill_focus = $("#bill_value").focus();
  $("#bill_value").css("outline-color","red");
  $(".error1").html("can't be zero");
 $(".h2-first").css("display","block");
 $(".h2-second").css("display","block");
}
else if( bill < 0){
  $("#bill_value").focus();
  $("#bill_value").css("outline-color","red");
  $(".error1").html("can't be negative");
  // $(".h2-first").css("display","block");
  // $(".h2-second").css("display","block");  (or)
  return;
}
else if (persons === "" || persons ==0) {
  var persons_focus = $("#persons_count").focus();
  $("#persons_count").css("outline-color","red");
  $(".error2").html("can't be zero");
  return;
}
else if (persons < 0) {
  var persons_focus = $("#persons_count").focus();
  $("#persons_count").css("outline-color","red");
  $(".error2").html("can't be negative");
  return;
}
else{
  var tip_value = bill*(custom/100);
  var tip_person = (tip_value/persons).toFixed(2);
  $(".h2-first").text("$"+tip_person);

  var total_value = parseFloat(bill) + parseFloat(tip_value);
     total_value = (total_value/persons).toFixed(2);
     $(".h2-second").text("$"+total_value);
}
}

// calling with clicking.............
 $(".chnbtn").on("click", function(){
$(this).fadeIn(100).fadeOut(100).fadeIn(100);
   var a = $(this).val();
    var bill_click = $("#bill_value").val();
 var tip_clicked = bill_click*a;


// clicked after person value entered this will apllied..........
 $("#persons_count").on("input",function(){
    var persons_clicked = $("#persons_count").val();
  // tip amout showed................
    var tip_person_clicked = (tip_clicked/persons_clicked).toFixed(2);
    $(".h2-first").text("$"+tip_person_clicked);
    // total per person showed this...........
   var total_value_clicked = parseFloat(bill_click) + parseFloat(tip_clicked);
     total_value_clicked = (total_value_clicked/persons_clicked).toFixed(2);
      $(".h2-second").text("$"+total_value_clicked);
});
// end of the persons entered.........
});
// end of the clicked value..........

// reload the page .......
$(".large-button").on("click", function(){
  location.reload();
});
// reload end page
