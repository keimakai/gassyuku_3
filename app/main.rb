# -*- coding: utf-8 -*-
io = Sinatra::RocketIO

## receive "hello" from client
io.on :hello do |message, client|

  puts "> receive '#{message}' from #{client.session}"
  io.push :eeee, message

end


io.on :hello2 do |message, client|

  puts "2 receive '#{message}' from #{client.session}"
  io.push :eeee2, message

end



get "/" do
  redirect "/ch1"
end

get "/:channel/edit" do
  @channel = params[:channel]
  erb:index2
end


get "/:channel" do
  @channel = params[:channel]
  erb:index
end


