class Reservations < ActiveRecord::Migration
  def change
    add_column :reservations, :room_id, :integer
  end
end