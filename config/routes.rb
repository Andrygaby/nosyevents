Rails.application.routes.draw do
  devise_for :admins, only: [:new]
  devise_for :users

  get "/users/sign_out", to: "home#destroy"
  get "/profil/:user_name", to: "profil#index"

  resources :posts

  root 'home#index'
end
