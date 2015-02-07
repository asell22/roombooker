class ReservationsController < ApplicationController

  def index
    @rooms = Room.all
    @reservations = Reservation.all
    @reservation = Reservation.new
    puts @reservations
  end

  def all
    @reservations = Reservation.all
    render json: @reservations
  end

  def create
    # p "================="
    # p reservation_params
    # p "================="
    # p params
    # p "================="
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      puts "good!"
      render json: @reservation
    else
      puts "bad!"
      render json: @reservation.errors, status: 500
    end

  end

  private

  def reservation_params
    params.require(:reservation).permit(:start,:end,:room_id)
  end

end
