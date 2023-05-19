<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <input
    :id="name"
    :name="name"
    :value="modelValue"
    type="checkbox"
    cursor="pointer"
    @change="$emit('update:modelValue', !modelValue)"
  />
  {{ modelValue }}
</template>