class Room < ActiveRecord::Base
  has_many :reservation
  has_many :users, through: :reservations
end
