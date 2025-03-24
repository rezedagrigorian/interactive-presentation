<template>
  <div
    class="p-8 bg-gradient-to-br from-indigo-100 to-purple-100 min-h-dvh w-screen flex flex-col justify-center items-center mx-auto">
    <h1 class="text-4xl font-bold mb-4">{{ title }}</h1>
    <p class="text-xl mb-8">{{ description }}</p>
    <div class="slot-content">
      <slot />
    </div>
  </div>
</template>


<script setup>
defineProps({
  title: {
    type: String,
    default: 'My Amazing Presentation'
  },
  description: {
    type: String,
    default: 'With cool stuff inside!'
  }
})
</script>

<style scoped>
h1 {
  color: #333;
}

p {
  color: #555;
  line-height: 1.6;
}

.slot-content {
  width: 100%;
}
</style>