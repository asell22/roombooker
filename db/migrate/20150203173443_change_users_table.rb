class ChangeUsersTable < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.remove :first_name, :last_name
    end
  end
end
