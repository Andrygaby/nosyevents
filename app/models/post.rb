class Post < ApplicationRecord
	belongs_to :user
	belongs_to :city
	has_and_belongs_to_many :genres
	mount_uploader :image, PostUploader
end