<script setup lang="ts">
import { onMounted, ref } from 'vue'

const target = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // Jika masuk layar, set true. Jika keluar layar, set false.
      if (entry.isIntersecting) {
        isVisible.value = true
      } else {
        isVisible.value = false // Ini kunci agar animasi bisa berulang
      }
    })
  }, {
    threshold: 0.1 // Sedikit saja terlihat (10%), langsung picu animasi
  })

  if (target.value) {
    observer.observe(target.value)
  }
})
</script>
<template>
  <div id="about">
    <section class="py-20 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-gray-900">About Us</h2>

        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="w-full md:w-1/2" ref="target">
            <div :class="[
              'transition-all duration-2000 ease-out',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            ]">
              <img src="/public/img/about.jpg" alt="About Us Illustration" class="w-full max-w-lg mx-auto">
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <h3 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p class="text-gray-500 text-lg mb-8 leading-relaxed">
              Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur
              maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At
              maiores, itaque.
            </p>

            <ul class="space-y-4 mb-10 text-gray-600">
              <li class="flex items-center gap-3">
                <span class="text-green-500">✔</span> Laborum enim quasi at modi
              </li>
              <li class="flex items-center gap-3">
                <span class="text-green-500">✔</span> Ad at tempore
              </li>
              <li class="flex items-center gap-3">
                <span class="text-green-500">✔</span> Labore quaerat esse
              </li>
            </ul>

            <button
              class="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
