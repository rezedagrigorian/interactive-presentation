<script setup>
import { ref } from 'vue' 
const displayedReactions = ref([])

function add(emoji) { 
    const id = Date.now().toString() + Math.random().toString()
    const size = Math.random() * 20 + 30

    const newReaction = {
        id,
        emoji,
        size,
        position: {
            x: Math.random() * 80 + 10,
            y: 5,
        }
    }

    displayedReactions.value.push(newReaction)

    setTimeout(() => {
        displayedReactions.value = displayedReactions.value.filter(reaction => reaction.id !== id)
    }, 2500)
}

defineExpose({
    add,
})
</script>

<template>
    <div class="fixed inset-0 pointer-events-none overflow-hidden">
        <div v-for="reaction in displayedReactions"
            :key="reaction.id"
            class="emoji-reaction absolute pointer-events-none select-none"
            :style="{
                bottom: `${reaction.position.y}%`,
                left: `${reaction.position.x}%`,
                fontSize: `${reaction.size}px`
            }">
            {{ reaction.emoji }}
        </div>
    </div>
</template>

<style scoped>
.emoji-reaction {
    animation: flyUp 2.5s ease-out forwards;
}

@keyframes flyUp {
    0% { 
        transform: translateY(0);
    }
    100% { 
        transform: translateY(-120vh);
    }
}
</style>
