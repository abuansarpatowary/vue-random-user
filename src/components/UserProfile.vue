<script setup>
import { ref, onMounted } from 'vue';

    // call randomuser api
name: 'UserProfile';
    
        const users = ref([]);
        const getUsers = async () => {
            const response = await fetch('https://randomuser.me/api/?gender=male&results=10');
            const { results } = await response.json();
            users.value = results;
        };
        function getRandomColor() {
          return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
        }
        onMounted(() => {
            getUsers();
        });

</script>

<template>
    <div>
      <h2>Meet the world's Random Person</h2>
     <div class="flex flex-wrap">
    <div v-for="user in users" :key="user.id.value" class="card flex">
      <div class="card-body">
        <img :src="user.picture.large" class="card-img-top" :alt="user.name.first">
        <h5 class="card-title">{{ user.name.first }} {{ user.name.last }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ user.location.city }}, {{ user.location.country }}</h6>
        <p>{{ user.id.value }}</p>
        <a :href="user.picture.large" class="card-link">Card link</a>
        <a :href="user.picture.large" class="card-link">Another link</a>
      </div>
    </div>
  </div>

   <!--  <figure v-for="user in users" :key="user.id.value" class="md:flex bg-slate-100 p-8 md:p-0 dark:bg-slate-800">
      <img class="w-24 md:w-36 md:rounded-none rounded-full mx-auto" :src="user.picture.large" :alt="user.name.first">
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium text-white" @click="getRandomColor">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            {{ user.name.first }} {{ user.name.last }}
          </div>
          <div class="text-slate-700 dark:text-slate-500">
            {{ user.location.city }}, {{ user.location.country }}
          </div>
        </figcaption>
      </div>
    </figure> -->
    </div>
</template>
<style scoped>
    
</style>