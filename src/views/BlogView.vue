<script setup lang="ts">
import { ref } from 'vue';

// Data simulasi untuk kartu blog
const posts = ref([
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000',
        title: 'Make Your Business More Profitable',
        author: 'Ham Brook',
        date: 'Jan 18, 2040',
        category: 'News',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1000',
        title: 'Make Your Business More Profitable',
        author: 'James Phelps',
        date: 'Jan 18, 2040',
        category: 'News',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000',
        title: 'Make Your Business More Profitable',
        author: 'James Phelps',
        date: 'Jan 18, 2040',
        category: 'News',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.'
    }
]);
</script>
<template>
    <section class="py-20 bg-white" id="blog">
        <div class="max-w-7xl mx-auto px-[10%]">
            <div class="text-center mb-16 ">
                <h2 class="text-4xl font-bold text-gray-900">Blog Posts</h2>
            </div>
            <div class="bg-white min-h-screen p-8 md:p-16">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">

                    <article v-for="post in posts" :key="post.id" class="flex flex-col">
                        <div class="overflow-hidden mb-6">
                            <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover" />
                        </div>

                        <div class="flex flex-col">
                            <h2 class="text-3xl font-medium text-gray-900 leading-tight mb-3">
                                {{ post.title }}
                            </h2>

                            <div class="text-gray-400 text-sm mb-6 flex items-center space-x-1">
                                <span>{{ post.author }}</span>
                                <span>•</span>
                                <span>{{ post.date }}</span>
                                <span>•</span>
                                <a href="#" class="text-blue-500 hover:underline">{{ post.category }}</a>
                            </div>

                            <p class="text-gray-500 leading-relaxed mb-6">
                                {{ post.excerpt }}
                            </p>

                            <a href="#" class="text-blue-500 font-medium hover:text-blue-600 transition-colors">
                                Continue Reading...
                            </a>
                        </div>
                    </article>

                </div>
            </div>
        </div>
    </section>
</template>