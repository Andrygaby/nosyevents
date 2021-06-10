class GenresPosts < ActiveRecord::Migration[6.0]
  def change
  	create_table :genres_posts, id: false do |t|
  		t.belongs_to :genre
  		t.belongs_to :post
  		
  	end
  end
end
