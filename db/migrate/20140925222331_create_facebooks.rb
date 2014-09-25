class CreateFacebooks < ActiveRecord::Migration
  def change
    create_table :facebooks do |t|
      t.string "email"
      t.string "friend"
      t.string "hint"

      t.timestamps
    end
  end
end
