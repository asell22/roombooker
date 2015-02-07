class AddUserIdandDateToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :user_id, :integer
    add_column :reservations, :date, :date
  end
end
