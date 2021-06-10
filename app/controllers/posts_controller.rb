class PostsController < ApplicationController
    layout 'post', except: [:new, :edit]
    layout 'new_post', only: [:new, :edit]
    before_action :user_connect, except: [:show]

    def index
    end

    def new

    end

    def create
        Post.create(permit_params)

        @list = params["list"]

        @list.each do |cle, val|
            if val == "yes"
                Post.last.genres << Genre.where(list: cle)
            end
        end

        redirect_to posts_path
    end

    def edit
    end

    def show
    end

    def update
    end

    def destroy
    end

 private

    def user_connect
        if user_signed_in?
            @post = Post.new
        else
            redirect_to new_user_session_path
        end         
    end

    def permit_params
        params.require(:post).permit(:title, :address, :date_limite, :hour, :description, :price, :image, :user_id, :city_id)
    end

end
