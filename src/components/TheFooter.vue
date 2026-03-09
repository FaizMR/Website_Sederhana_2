<script setup lang="ts">
// Definisikan props untuk menerima menu
defineProps<{
    menuItems: { name: string; link: string }[]
}>();
</script>

<template>
    <footer
        class="flex justify-between items-center p-2 px-[7%] bg-linear-to-l from-blue-50 to-slate-900 border-b border-solid border-blue-50  ">
        <div class="">
            <a v-for="item in menuItems" :key="item.name" :href="item.link"
                class="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-white hover:border-white">
                {{ item.name }}
            </a>
        </div>

        <div class="credit pb-2">
            <p class="font-semibold">
                Created by <a href="#" class="font-bold">Faiz Muhammad Rijal Fikri</a>. | &copy; 2026.
            </p>
        </div>
    </footer>
</template>