<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  labelFor: {
    type: String,
    required: true
  },
  isStroke: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <label
    :for="labelFor"
    font="bold"
    text="sm"
    cursor="pointer"
    :class="isStroke && 'line-through opacity-30'"
  >
    {{ label }}
  </label>
</template>