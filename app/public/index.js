var io = new RocketIO().connect();


io.on("connect", function(){
  console.log("connect!! "+io.session);
});

io.on("clients", function(data){
  console.log(data);
  $("#clients").text("websocket:"+data.websocket+" comet:"+data.comet);
});
   

io.on("eeee", function(message){
  console.log("eeee received :"+message);
  $("#view001").val(message);

});


io.on("eeee2", function(message){
  console.log("eeee received :"+message);
  $("#view002").val(message);
});
