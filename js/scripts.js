function walrus(){
  $("#initially-hidden").fadeToggle();
}
function walrus2(){
  $("#initially-showing").fadeToggle();
}


$(document).ready (function() {
  $(".clickable1").click(function(){
    setTimeout(walrus, 400);
    $("#initially-showing").fadeToggle();
  });
    $(".clickable2").click(function(){
      setTimeout(walrus2, 400);
      $("#initially-hidden").fadeToggle();
  });
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
    $("span").addClass("whiteText");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $("span").removeClass("whiteText");

  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
    $("span").removeClass("whiteText");
  });
});
