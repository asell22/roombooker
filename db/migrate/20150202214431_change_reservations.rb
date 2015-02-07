class ChangeReservations < ActiveRecord::Migration
  def change
    change_table :reservations do |t|
      t.remove :start_time, :length
      t.float :start, :end
  end


  end
end
