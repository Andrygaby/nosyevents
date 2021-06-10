class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
    	t.string :title
    	t.string :address
    	t.datetime :date_limite
    	t.string :hour
    	t.text :description
    	t.string :price
      t.boolean :payer, default: false
    	t.string :image

    	t.belongs_to :user, index: true
      t.belongs_to :city, index: true

      t.timestamps
    end
  end
end
