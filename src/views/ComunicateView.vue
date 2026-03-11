<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Buat state dan ref terpisah untuk tiap target
const target1 = ref(null)
const isVisible1 = ref(false)

const target2 = ref(null)
const isVisible2 = ref(false)

const target3 = ref(null)
const isVisible3 = ref(false)

const target4 = ref(null)
const isVisible4 = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Kita cek target mana yang sedang kena scroll
            if (entry.target === target1.value) {
                isVisible1.value = entry.isIntersecting
            } else if (entry.target === target2.value) {
                isVisible2.value = entry.isIntersecting
            } else if (entry.target === target3.value) {
                isVisible3.value = entry.isIntersecting
            } else if (entry.target === target4.value) {
                isVisible4.value = entry.isIntersecting
            }
        })
    }, { threshold: 0.3 })

    // Daftarkan kedua target ke satu observer yang sama
    if (target1.value) observer.observe(target1.value)
    if (target2.value) observer.observe(target2.value)
    if (target3.value) observer.observe(target3.value)
    if (target4.value) observer.observe(target4.value)
})
</script>
<template>
    <div id="comunicate" class="px-[10%] bg-white">
        <section class="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
            <div class="w-full md:w-1/2 flex justify-center" ref="target1">
                <div :class="[
                    'duration-1000 ease-out transition-all',
                    isVisible1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                ]">
                    <img src="/public/img/comunicate.png" alt="Illustration" class=" w-full">
                </div>
            </div>

            <div class="w-full md:w-1/2">

                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Communicate and <br> gather feedback
                </h2>
                <p class="text-gray-500 text-lg mb-10 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem
                    molestias corrupti officia veniam.
                </p>
                <div ref="target2">
                    <div :class="[
                        'transition-all duration-4000 ease-out',
                        isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    ]">
                        <div class="relative bg-white p-8 rounded-lg shadow-xl border-l-4 border-blue-500 max-w-lg">
                            <div class="flex items-center gap-4 mb-4">
                                <img src="https://i.pravatar.cc/150?u=kimberly" alt="Kimberly Gush"
                                    class="w-12 h-12 rounded-full object-cover">
                                <div>
                                    <h4 class="font-bold text-xl text-gray-900 leading-none">Kimberly Gush</h4>
                                    <p class="text-gray-500 text-sm mt-1">Co-Founder, XYZ Inc.</p>
                                </div>
                            </div>
                            <p class="text-gray-600 italic leading-relaxed">
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores
                                inventore
                                aperiam iure?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
            <div class="w-full md:w-1/2" ref="target3">

                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Communicate and <br> gather feedback
                </h2>
                <p class="text-gray-500 text-lg mb-10 leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque nisi architecto autem
                    molestias corrupti officia veniam.
                </p>
                <div ref="target3">
                    <div :class="[
                        'duration-4000 ease-out transition-all',
                        isVisible3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    ]">
                        <div class="relative bg-white p-8 rounded-lg shadow-xl border-l-4 border-blue-500 max-w-lg">
                            <div class="flex items-center gap-4 mb-4">
                                <img src="https://i.pravatar.cc/150?u=grey" alt="Avatar"
                                    class="w-12 h-12 rounded-full object-cover">
                                <div>
                                    <h4 class="font-bold text-xl text-gray-900 leading-none">Grey Simpson</h4>
                                    <p class="text-gray-500 text-sm mt-1">Co-Founder, XYZ Inc.</p>
                                </div>
                            </div>
                            <p class="text-gray-600 italic leading-relaxed">
                                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores
                                inventore
                                aperiam iure?"
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full md:w-1/2 flex justify-center" ref="target4">
                <div :class="[
                    'transition-all duration-1000 ease-out',
                    isVisible4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                ]">
                    <img src="/public/img/comunicate2.jpg" alt="Illustration" class=" w-full">
                </div>
            </div>
        </section>
    </div>

</template>