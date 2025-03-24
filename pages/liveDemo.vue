<script setup>
import VisitorsReactions from './components/VisitorsReactions.vue'
import { useWebSocket } from '@vueuse/core'

const emojis = ['🚀', '🔥', '🌟', '🎉', '🎈', '🎁']
const reactions = useTemplateRef('reactions')
const nuxters = ref(0)

const { send } = useWebSocket('api/reactions', {
  async onMessage(ws, event) {
    const data = JSON.parse(typeof event.data === 'string' ? event.data : await event.data.text())
    if (data.nuxters) {
      nuxters.value = data.nuxters
    }
    if (data.reaction) {
      reactions.value.add(data.reaction)
    }
  }
})

</script>

<template>
  <div>
    <div
      class="min-h-dvh w-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-8">
      <div class="flex items-center justify-center gap-2 mb-8">
        <div
          class="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-sm px-4 py-2 rounded-full shadow-lg">
          <Icon name="fluent-mdl2:group" class="text-white text-lg" />
          <p>{{ nuxters }} connected</p>
        </div>

      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <button v-for="emoji in emojis" :key="emoji"
          class="flex items-center justify-center text-5xl bg-gradient-to-br from-blue-400 to-purple-500 text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[120px] min-h-[120px]"
          @click="send(emoji)" @dblclick="() => { }">
          {{ emoji }}
        </button>
      </div>
      <VisitorsReactions ref="reactions" />
    </div>
  </div>
</template>