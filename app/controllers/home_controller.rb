class HomeController < ApplicationController

	layout 'application'
	
	def index
		@posts = Post.all
		@test = Post.all.count
	end

	def destroy
		sign_out(current_user)
		redirect_to root_path
	end
end
