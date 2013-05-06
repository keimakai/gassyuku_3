io = new RocketIO().connect();


io.on("connect", function(){
  console.log("connect!! "+io.session);
});

io.on("clients", function(data){
  console.log(data);
  $("#clients").text("websocket:"+data.websocket+" comet:"+data.comet);
});
   
// push "hello" to server
$(function(){

  $("#view001").keyup(function(){
    var message = $("#view001").val();
    io.push("hello", message);
  });


});



io.on("eeee", function(message){
  $("#view002").html(message);
});
