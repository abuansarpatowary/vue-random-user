<script setup>
// import UserProfile from './components/UserProfile.vue';
</script>

<template>
  <div class="flex mx-2">
    <router-link to="/">UserProfile</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
