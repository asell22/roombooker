class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.time :start_time
      t.integer :length
      
      t.timestamps
    end
  end
end
