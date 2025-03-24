<template>
  <div class="container" tabindex="0" @keydown="handleKeydown" ref="container">
    <div class="slides">
      <PresentationSlide 
        v-show="currentSlide === 0"
      >
        <div class="slot-content">
          <iframe src="https://giphy.com/embed/1aLsEE397a70GrmXuH" width="480" height="269" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/marchmadness-ncaa-tournament-2025-march-madness-1aLsEE397a70GrmXuH"></a></p>
        </div>
      </PresentationSlide>

      <PresentationSlide 
        v-show="currentSlide === 1"
        title="Slide 1"
        description="This is the first slide of the presentation."
      >
        <div class="slot-content">
          <p>Slide 1 content goes here.</p>
        </div>
      </PresentationSlide>

      <PresentationSlide 
        v-show="currentSlide === 2"
        title="Slide 2"
        description="This is the second slide of the presentation."
      >
        <div class="slot-content">
          <p>Slide 2 content goes here.</p>
        </div>
      </PresentationSlide>

      <PresentationSlide 
        v-show="currentSlide === 3"
        title="Slide 3"
        description="This is the third slide of the presentation."
      >
        <div class="slot-content">
          <p>Slide 3 content goes here.</p>
        </div>

      </PresentationSlide>

      <PresentationSlide 
        v-show="currentSlide === 4"
        title="Slide 4"
        description="This is the fourth slide of the presentation."
      >
        <div class="slot-content">
          <p>Slide 4 content goes here.</p>
        </div>
      </PresentationSlide>
      <div class="nav-hint">Use ← → to navigate</div>
      <div class="counter">{{ currentSlide + 1 }} / {{ totalSlides }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PresentationSlide from './components/PresentationSlide.vue';

const currentSlide = ref(0)
const totalSlides = 5
const container = ref(null)

function nextSlide() {
  if (currentSlide.value < totalSlides - 1) {
    currentSlide.value++
  }
}

function prevSlide() {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

function handleKeydown(event) {
  if (event.key === 'ArrowRight') {
    nextSlide()
  } else if (event.key === 'ArrowLeft') {
    prevSlide()
  }
}

onMounted(() => {
  container.value?.focus()
})
</script>

<style scoped>
.container {
  max-width: 100%;
  margin: 0 auto;
  font-family: sans-serif;
  outline: none;
}

.slides {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 90vh;
  position: relative;
}

.slide {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 320px;
  text-align: center;
}

.slide h2 {
  font-size: 32px;
  color: #35495E;
  margin-bottom: 20px;
}

.slide p {
  font-size: 18px;
  max-width: 600px;
}

.counter,
.nav-hint {
  position: absolute;
  bottom: 10px;
  font-size: 12px;
  color: #666;
}

.counter {
  right: 20px;
}

.nav-hint {
  left: 20px;
}

.slot-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>