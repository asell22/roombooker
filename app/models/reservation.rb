class Reservation < ActiveRecord::Base
  belongs_to :rooms
  belongs_to :users

  validates :start, :end, :room_id, presence: true
  
end
