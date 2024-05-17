<template>
  <div>
    <h1>Available Bibles</h1>
    <ul>
      <li v-for="bible in bibles" :key="bible.id">
        <router-link :to="{ name: 'Bible', params: { id: bible.id } }">{{ bible.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import bibleApi from "@/services/bibleApi";

export default {
  data() {
    return {
      bibles: [],
    };
  },
  created() {
    bibleApi.getBibles().then(response => {
      this.bibles = response.data.data;
    }).catch(error => {
      console.error('There was an error!', error);
    });
  },
};
</script>
