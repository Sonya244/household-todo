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

  def destroy
    todo = Todo.find(params[:id])
    todo.destroy!

    render json: todo, status: :ok
  end

  def done
    todo = Todo.find(params[:id])
    todo.update!(done_at: Time.zone.now)

    render json: todo, status: :ok
  end

  def todo_params
    params.permit(:description, :expire_at)
  end
end
