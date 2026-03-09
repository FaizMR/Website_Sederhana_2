<script setup lang="ts">
import { ref } from 'vue';

// 1. Definisikan "lubang" input (Props)
defineProps<{
    menuItems: { name: string; link: string }[]
}>();

const isMenuOpen = ref(false);
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
    <nav
        class="flex justify-between items-center py-4 p-2 px-[10%] bg-linear-to-r from-blue-50 to-slate-900 fixed top-0 left-0 right-0 z-50">
        <a href="#" class="text-2xl font-bold ">Dream.</a>

        <div :class="{
            'fixed top-17 right-0 w-64 h-screen flex flex-col p-6 z-9999 gap-2': isMenuOpen,
            'hidden': !isMenuOpen
        }"
            class="items-center md:flex md:space-x-1 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none md:flex-row ">

            <a v-for="item in menuItems" :key="item.name" :href="item.link"
                class="inline-block font-semibold rounded-sm px-5 py-1.5 text-sm leading-normal text-white hover:border-white border border-transparent">
                {{ item.name }}
            </a>

        </div>

        <div class="block md:hidden">
            <a @click.prevent="toggleMenu" href="#" id="hamburger-menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-menu">
                    <path d="M4 5h16" />
                    <path d="M4 12h16" />
                    <path d="M4 19h16" />
                </svg>
            </a>
        </div>
    </nav>
</template>