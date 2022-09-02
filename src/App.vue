<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="site">
        <Header />
        <div class="site__content">
            <RouterView />
        </div>
        <Footer />
    </div>
</template>
