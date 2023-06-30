<script setup>
import { ref, onMounted } from 'vue';

    // call randomuser api
name: 'UserProfile';
    
        const users = ref([]);
        const getUsers = async () => {
            const response = await fetch('https://randomuser.me/api/?gender=male&results=12');
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
    <div class="font-serif text-center">
      <h2 class="text-4xl md:text-6xl lg:text-8xl font-bold text-center my-8">Meet the world's Random Person</h2>
     <div class="grid grid-auto-fit-sm text-center place-items-center">
        <div v-for="user in users" :key="user.id.value" class="card mb-8">
          <div class="card-body relative">
            <img :src="user.picture.large" class="card-img-top w-52 h-auto rounded-full" :alt="user.name.first">
            <span class="card-title bg-white font-semibold rounded-full inline absolute bottom-3 left-0 right-0">{{ user.name.first }}</span>
          </div>
        </div>
      </div>
    </div>
</template>