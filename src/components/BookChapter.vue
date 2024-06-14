<template>
  <div>
    <h1> {{bookChapter?.reference}}</h1>
    <div v-for="bibleParagraph in bookChapter?.content" :key="bibleParagraph.id">
      <div v-for="element in bibleParagraph.items" :key="element.id">
        {{element.text}}<p class="verse">{{element?.text}}</p>
        {{formattedElement(element)}}
      </div>
      <br/>
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
const formattedElement = (element) => {
  console.log(element);
}
</script>
<style scoped>
.verse {
  color: #c5c5c5;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 4px;
}
h1 {
  font-size: 1.5em;
  color: #00a2ff;
}
</style>