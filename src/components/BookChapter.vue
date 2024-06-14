<template>
  <div>
    <h1> {{bookChapter?.reference}}</h1>
    <RouterLink :to="previousPage(bookChapter)">Cap. {{ bookChapter?.previous?.number }}</RouterLink>
    <div class="paragraph" v-for="bibleParagraph in bookChapter?.content" :key="bibleParagraph?.id">
      <template v-for="element in bibleParagraph?.items" :key="element?.id">
        {{formattedElement(element)}}
      </template>
      <br/>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { RouterLink } from "vue-router";
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
const previousPage = (chapter) => {
  return `/chapter/${chapter?.bibleId}/${chapter?.previous?.id}`;
};
const formattedElement = (element) => {
  // type: tag => if name char get the text, else verse number
  // type: text => verse text
  switch (element?.type) {
    case 'tag':
      return (element?.name === 'char') ? `${element?.items[0]?.text}` : `${element?.attrs?.number}. `;
    case 'text':
      return `${element?.text}`;
    default:
      return '';
  }
};
</script>
<style scoped>
html {
  font-family: Roboto;
  font-weight: lighter;
}
.paragraph {
  color: #c5c5c5;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 5px;
  display: block;
  width: 100%;
}
h1 {
  font-size: 1.5em;
  color: #00a2ff;
}
</style>