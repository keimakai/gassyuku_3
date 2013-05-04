io = new RocketIO().connect();

// push "hello" to server
$(function(){
  $("#btn").click(function(){
    var message = $("#text").val();
    io.push("hello", message);
  });



  $("#btn2").click(function(){
    var message = $("#text").val();
    io.push("hello2", message);
  });

});


io.on("eeee", function(message){
  // alert(message);
  $("#log").prepend( $("<p>").text(message) );
});


io.on("eeee2", function(message){
   alert(message);
  //$("#log").prepend( $("<p>").text(message) );
});
