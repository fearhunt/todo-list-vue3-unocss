import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '@/types/todo'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])

  const createTodo = (label: string, categoryId?: string) => {
    const newTodo: Todo = {
      id: 'tes-todo-id',
      label,
      completed: false,
    }
    
    if (categoryId) newTodo.category = categoryId

    todos.value.push(newTodo)
  }

  const deleteTodo = (id: string) => {
    const index = todos.value.findIndex((todo) => todo.id === id)

    if (index !== -1) todos.value.splice(index, 1)
  }

  const toggleTodoStatus = (id: string) => {
    const todo = todos.value.find((todo) => todo.id === id)

    if (todo) todo.completed = !todo.completed
  }

  return { 
    todos,
    createTodo,
    deleteTodo,
    toggleTodoStatus,
  }
})
