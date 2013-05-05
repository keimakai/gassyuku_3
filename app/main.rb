# -*- coding: utf-8 -*-
io = Sinatra::RocketIO
logs = Hash.new{|h,k| h[k] = Array.new }



## receive "hello" from client
io.on :hello do |message, client|

  puts "> receive '#{message}' from #{client.session}"
  io.push :eeee, message
end







get "/:channel/edit" do
  @channel = params[:channel]
  erb:index2
end


get "/:channel" do
  @channel = params[:channel]
  erb:index
end


