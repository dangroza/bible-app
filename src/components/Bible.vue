<template>
  <div>
    <h1>Bible {{bibleInfo?.name}}</h1>
    <div v-for="bibleBook in bibleData" :key="bibleBook.id">
      <h3>{{bibleBook.name}}</h3>
      <p>{{bibleBook.nameLong}}</p>
      <div v-for="chapter in bibleBook.chapters" :key="chapter.id">
        <router-link :to="{ name: 'BookChapter', params: { bibleId: bibleInfo.id, chapterId: chapter.id } }">{{ chapter.number }}</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import bibleApi from "@/services/bibleApi";

const route = useRoute();
const bibleInfo = ref();
const bibleData = ref();


onMounted(async () => {
  bibleApi.getBible(route.params.id).then(response => {
    bibleInfo.value = response.data.data;
  }).catch(error => {
    console.error('There was an error!', error);
  });
  bibleApi.getBibleBooks(route.params.id).then(response => {
    bibleData.value = response.data.data;
  }).catch(error => {
    console.error('There was an error!', error);
  });
});
/*  created() {
    bibleApi.getBible(this.id).then(response => {
      this.bible = response.data;
    }).catch(error => {
      console.error('There was an error!', error);
    });
  },
};*/

</script>
