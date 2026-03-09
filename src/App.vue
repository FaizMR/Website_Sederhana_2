<script setup lang="ts">
import TheNavbar from './components/TheNavbar.vue';
import AboutView from './views/AboutView.vue';
import ComunicateView from './views/ComunicateView.vue';
import HomeView from './views/HomeView.vue';
import FeaturesView from '@/views/FeaturesView.vue';
import TeamView from '@/views/TeamView.vue';
import TestimonialsView from './views/TestimonialsView.vue';
import BlogView from './views/BlogView.vue';
import ContactView from './views/ContactView.vue';
import TheFooter from './components/TheFooter.vue';

const myNav = [
  { name: 'Home', link: '#home' },
  { name: 'Features', link: '#features' },
  { name: 'About Us', link: '#about' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Blog', link: '#blog' },
  { name: 'Contact', link: '#contact' }
];
</script>

<template>
  <TheNavbar :menu-items="myNav" />
  <HomeView />
  <FeaturesView />
  <ComunicateView />
  <AboutView />
  <TeamView />
  <TestimonialsView />
  <BlogView />
  <ContactView />
  <TheFooter :menu-items="myNav" />
</template>