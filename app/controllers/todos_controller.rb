class TodosController < ApplicationController
  skip_forgery_protection

  def create
    todo = Todo.create!(todo_params)

    render json: todo, status: :created
  end

  def index
    todos = Todo.all

    render json: todos, status: :ok
  end

  def todo_params
    params.permit(:description, :expire_at)
  end
end
