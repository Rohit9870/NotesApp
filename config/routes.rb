Rails.application.routes.draw do
  root 'notes#index'
  resources :notes
  devise_for :users, controllers: { sessions: 'users/sessions' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
