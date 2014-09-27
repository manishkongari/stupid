class CreateFbs < ActiveRecord::Migration
  def change
    create_table :fbs do |t|
      t.string "userid"
      t.string "name"
      t.string "email"
      t.string "friend"
      t.string "hint"

      t.timestamps
    end
   
  end
end
