<script setup lang="ts">
import { onMounted, ref } from 'vue';

// Buat state dan ref terpisah untuk tiap target
const target1 = ref(null)
const isVisible1 = ref(false)

const target2 = ref(null)
const isVisible2 = ref(false)

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Kita cek target mana yang sedang kena scroll
            if (entry.target === target1.value) {
                isVisible1.value = entry.isIntersecting
            } else if (entry.target === target2.value) {
                isVisible2.value = entry.isIntersecting
            }
        })
    }, { threshold: 0.3 })

    // Daftarkan kedua target ke satu observer yang sama
    if (target1.value) observer.observe(target1.value)
    if (target2.value) observer.observe(target2.value)
})
</script>
<template>
    <div id="features" class="p-32 text-center bg-white">
        <div ref="target1" class="px-[30%] min-h-75 flex items-center justify-center">
            <div :class="[
                'duration-1000 ease-out transition-all',
                isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            ]">
                <h2 class="text-4xl font-bold text-center pb-3">Dream Features</h2>
                <p class="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus tenetur
                    cupiditate,
                    culpa sint et.</p>
            </div>
        </div>
        <div ref="target2" class="py-16 flex items-center justify-center">
            <div :class="[
                'max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 transition-all duration-1000 ease-out',
                isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            ]">
                <div class="group transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                    <div
                        class="relative bg-gray-50 p-8 pt-16 shadow-sm rounded-sm text-center flex flex-col items-center group-hover:bg-blue-500 ">
                        <div
                            class="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:bg-white group-hover:text-blue-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35   " height="35" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <path d="M3 3v5h5" />
                                <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                <path d="M16 16h5v5" />
                            </svg>
                        </div>

                        <div class="group-hover:text-white">
                            <h3 class="text-xl font-bold  mb-4 ">Marketing Consulting</h3>
                            <p class=" leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                molestiae
                                vitae
                                eligendi at.
                            </p>
                            <a href="#" class="text-blue-500 group-hover:text-white font-medium transition-colors">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div class="group transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                    <div
                        class="relative bg-gray-50 p-8 pt-16 shadow-sm rounded-sm text-center flex flex-col items-center group-hover:bg-blue-500 ">
                        <div
                            class="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:bg-white group-hover:text-blue-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-store-icon lucide-store">
                                <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
                                <path
                                    d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
                                <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
                            </svg>
                        </div>
                        <div class="group-hover:text-white">
                            <h3 class="text-xl font-bold mb-4">Market Analysis</h3>
                            <p class="leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                molestiae
                                vitae
                                eligendi at.
                            </p>
                            <a href="#" class="text-blue-500 font-medium transition-colors group-hover:text-white">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div class="group transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                    <div
                        class="relative bg-gray-50 p-8 pt-16 shadow-sm rounded-sm text-center flex flex-col items-center group-hover:bg-blue-500 ">
                        <div
                            class="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:bg-white group-hover:text-blue-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-shopping-basket-icon lucide-shopping-basket">
                                <path d="m15 11-1 9" />
                                <path d="m19 11-4-7" />
                                <path d="M2 11h20" />
                                <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
                                <path d="M4.5 15.5h15" />
                                <path d="m5 11 4-7" />
                                <path d="m9 11 1 9" />
                            </svg>
                        </div>
                        <div class="group-hover:text-white">
                            <h3 class="text-xl font-bold mb-4">Easy Purchase</h3>
                            <p class="leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                molestiae
                                vitae
                                eligendi at.
                            </p>
                            <a href="#" class="text-blue-500 font-medium group-hover:text-white transition-colors">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>

                <div class="group transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                    <div
                        class="relative bg-gray-50 p-8 pt-16 shadow-sm rounded-sm text-center flex flex-col items-center group-hover:bg-blue-500 ">
                        <div
                            class="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:bg-white group-hover:text-blue-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-rotate-ccw-icon lucide-rotate-ccw">
                                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                <path d="M3 3v5h5" />
                            </svg>
                        </div>

                        <h3 class="text-xl font-bold mb-4">Free Updates</h3>
                        <p class="leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae
                            vitae
                            eligendi at.
                        </p>
                        <a href="#" class="text-blue-500 font-medium group-hover:text-white transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>

                <div class="group transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                    <div
                        class="relative bg-gray-50 p-8 pt-16 shadow-sm rounded-sm text-center flex flex-col items-center group-hover:bg-blue-500 ">
                        <div
                            class="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:bg-white group-hover:text-blue-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-smile-icon lucide-smile">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                                <line x1="9" x2="9.01" y1="9" y2="9" />
                                <line x1="15" x2="15.01" y1="9" y2="9" />
                            </svg>
                        </div>

                        <h3 class="text-xl font-bold mb-4">100% Satisfied</h3>
                        <p class="leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae
                            vitae
                            eligendi at.
                        </p>
                        <a href="#" class="text-blue-500 font-medium group-hover:text-white transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>

                <div class="group transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                    <div
                        class="relative bg-gray-50 p-8 pt-16 shadow-sm rounded-sm text-center flex flex-col items-center group-hover:bg-blue-500 ">
                        <div
                            class="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:bg-white group-hover:text-blue-500 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-plug-icon lucide-plug">
                                <path d="M12 22v-5" />
                                <path d="M15 8V2" />
                                <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" />
                                <path d="M9 8V2" />
                            </svg>
                        </div>

                        <h3 class="text-xl font-bold mb-4">Easy Plugin</h3>
                        <p class="leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                            molestiae vitae
                            eligendi at.
                        </p>
                        <a href="#" class="text-blue-500 font-medium group-hover:text-white transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>