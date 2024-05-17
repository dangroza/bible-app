<template>
  <div>
    <h1>Bible chapter {{bookChapter?.reference}}</h1>
    <div v-for="bibleParagraph in bookChapter?.content" :key="bibleParagraph.id">
      <div v-for="element in bibleParagraph.items" :key="element.id">
        <p>{{element?.text}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import bibleApi from "@/services/bibleApi";

const route = useRoute();
const bookChapter = ref();

// add computed for content with name==="para" to format all paragraphs
onMounted(async () => {
  bibleApi.getBookChapter(route.params.bibleId, route.params.chapterId).then(response => {
    bookChapter.value = response.data.data;
  }).catch(error => {
    console.error('There was an error!', error);
  });
});
</script>
