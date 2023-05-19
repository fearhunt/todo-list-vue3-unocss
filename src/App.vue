<script setup lang="ts">
import 'uno.css'

import AtomHeader from './components/atom/Header.vue'
import MoleculeCardTodo from './components/molecule/CardTodo.vue'
import type { Todo } from './types/todo'
import { useTodoStore } from './stores/todo'
import { storeToRefs } from 'pinia'

// Temp testing with mock todo
const mockTodos: Todo[] = [
  {
    id: '1',
    label: 'Test',
    completed: false
  },
  {
    id: '2',
    label: 'Test 2',
    completed: true
  },
  {
    id: '3',
    label: 'Test 3',
    completed: false
  },
  {
    id: '4',
    label: 'Test 4',
    completed: true
  }
]

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)
todos.value     = mockTodos
</script>

<template>
  <main>
    <div p="4">
      <AtomHeader />
      <MoleculeCardTodo 
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo" 
      />
    </div>
  </main>
</template>

<style scoped>

</style>
