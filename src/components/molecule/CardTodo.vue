<script setup lang="ts">
import type { PropType } from 'vue'
import AtomCard from '../atom/Card.vue'
import AtomInputLabel from '../atom/input/Label.vue'
import AtomInputCheckbox from '../atom/input/Checkbox.vue'
import type { Todo } from '@/types/todo'

const props = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true
  }
})
</script>

<template>
  <AtomCard
    display="flex"
    gap="4"
    items="center"
    justify="between"
    my="6"
  >
    <AtomInputLabel 
      :label="todo.label" 
      :label-for="`todo-${todo.id}`" 
      :is-stroke="todo.completed" 
    />
    <AtomInputCheckbox 
      v-model="todo.completed" 
      :name="`todo-${todo.id}`" 
    />
  </AtomCard>
</template>
