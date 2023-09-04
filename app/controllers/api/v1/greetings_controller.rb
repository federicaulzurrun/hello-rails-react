class Api::V1::GreetingsController < ApplicationController
  def random_greeting
    message = Message.order("RANDOM()").first
    render json: { greeting: message&.content || "No greetings available" }
  end
end