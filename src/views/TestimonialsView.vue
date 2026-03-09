<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface Testimonial {
    id: number
    name: string
    text: string
    image: string
}

const testimonials: Testimonial[] = [
    { id: 1, name: 'John Smith', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam accusantium architecto in minima temporibus fugit? Facilis odit reprehenderit assumenda.', image: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, name: 'Robert Aguilar', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam accusantium architecto in minima temporibus fugit? Facilis odit reprehenderit assumenda.', image: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, name: 'Roger Spears', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laboriosam accusantium architecto in minima temporibus fugit? Facilis odit reprehenderit assumenda.', image: 'https://i.pravatar.cc/150?u=3' },
]

const activeIndex = ref(0)
let autoPlayInterval: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % testimonials.length
}

// Fungsi untuk berpindah slide saat dot diklik
const goToSlide = (index: number) => {
    activeIndex.value = index
    resetTimer() // Reset timer agar durasi mulai dari awal lagi setelah diklik
}

const startTimer = () => {
    autoPlayInterval = setInterval(() => {
        nextSlide()
    }, 5000) // 5000ms = 5 detik
}

const resetTimer = () => {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
        startTimer()
    }
}

onMounted(() => {
    startTimer()
})

onUnmounted(() => {
    // Penting: Bersihkan interval saat komponen dihancurkan agar tidak memory leak
    if (autoPlayInterval) clearInterval(autoPlayInterval)
})
// Buat computed property agar TypeScript tenang
const activeTestimonial = computed(() => testimonials[activeIndex.value])

onMounted(() => startTimer())
</script>
<template>
    <div id="testimonials" class="flex flex-col items-center justify-center p-8 bg-gray-50 min-h-100">
        <h2 class="text-3xl font-semibold mb-12 text-gray-800">Testimonials</h2>

        <div class="px-[10%] relative w-full max-w-2xl overflow-hidden">
            <Transition mode="out-in" enter-active-class="transition duration-500 ease-out"
                enter-from-class="opacity-0 translate-x-12" leave-active-class="transition duration-500 ease-in"
                leave-to-class="opacity-0 -translate-x-12">
                <div v-if="activeTestimonial" :key="activeIndex" class="flex flex-col items-center text-center">
                    <div class="w-24 h-24 mb-6 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <img :src="activeTestimonial.image" :alt="activeTestimonial.name"
                            class="w-full h-full object-cover" />
                    </div>

                    <blockquote class="text-lg italic text-gray-600 mb-6 leading-relaxed px-4">
                        "{{ activeTestimonial.text }}"
                    </blockquote>

                    <cite class="not-italic font-bold text-gray-900 tracking-wide">
                        {{ activeTestimonial.name }}
                    </cite>
                </div>
            </Transition>
        </div>

        <div class="flex space-x-3 mt-10">
            <button v-for="(_, index) in testimonials" :key="index" @click="goToSlide(index)"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="activeIndex === index ? 'bg-blue-500 w-6' : 'bg-gray-300 hover:bg-gray-400'"></button>
        </div>
    </div>
</template>