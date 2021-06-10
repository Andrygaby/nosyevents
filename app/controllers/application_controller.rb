class ApplicationController < ActionController::Base
protect_from_forgery
	before_action :configure_devise_parametres, if: :devise_controller?
  	layout :layout_by_controller


    def layout_by_controller
        if devise_controller? && resource_name == :user
            "devise"
        end
  	end

  	def configure_devise_parametres
		devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:username, :email, :password, :password_confirmation, :image)}
	end

    def after_sign_in_path_for(resource)
        posts_path
    end
end