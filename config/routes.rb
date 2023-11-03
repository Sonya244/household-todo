Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'application#root'
  resources :todos, only: [:index, :create, :update, :destroy] do
    member do
      patch :done
    end
  end
end
