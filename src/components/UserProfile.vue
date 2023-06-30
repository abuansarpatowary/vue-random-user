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
    </div>
</template>
<style scoped>
    
</style>