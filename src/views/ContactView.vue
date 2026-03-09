<template>
    <section class="relative py-20 min-h-screen flex items-center justify-center" id="contact">
        <div class="fixed inset-0 bg-[url('/public/img/hero_bg.jpg')] bg-cover bg-center bg-no-repeat -z-10">
            <div class="absolute inset-0 bg-blue-400/20 backdrop-blur-sm"></div>
        </div>

        <div class="max-w-4xl w-full mx-auto px-[10%] relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div class="bg-white p-10 md:p-16 shadow-2xl rounded-sm">
                <h2 class="text-2xl text-gray-800 mb-8">Contact Form</h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex flex-col">
                            <label class="text-sm text-gray-600 mb-2">First Name</label>
                            <input type="text"
                                class="border border-gray-300 p-3 focus:outline-none focus:border-blue-500 transition shadow-sm" />
                        </div>
                        <div class="flex flex-col">
                            <label class="text-sm text-gray-600 mb-2">Last Name</label>
                            <input type="text"
                                class="border border-gray-300 p-3 focus:outline-none focus:border-blue-500 transition shadow-sm" />
                        </div>
                    </div>

                    <div class="flex flex-col">
                        <label class="text-sm text-gray-600 mb-2">Email</label>
                        <input type="email"
                            class="border border-gray-300 p-3 focus:outline-none focus:border-blue-500 transition shadow-sm" />
                    </div>

                    <div class="flex flex-col">
                        <label class="text-sm text-gray-600 mb-2">Subject</label>
                        <input type="text"
                            class="border border-gray-300 p-3 focus:outline-none focus:border-blue-500 transition shadow-sm" />
                    </div>

                    <div class="flex flex-col">
                        <label class="text-sm text-gray-600 mb-2">Message</label>
                        <textarea rows="6" placeholder="Leave your message here..."
                            class="border border-gray-300 p-3 focus:outline-none focus:border-blue-500 transition shadow-sm resize-none"></textarea>
                    </div>

                    <div class="pt-4">
                        <button type="submit"
                            class="bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-full transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const handleSubmit = () => {
    alert('Pesan Anda telah dikirim!');
}
</script>