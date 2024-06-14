<template>
  <header><h1>Bible {{bibleInfo?.name}}</h1></header>
  <div>
    <div class="book-list" v-for="bibleBook in bibleData" :key="bibleBook.id">
      <div class="book">Book: {{bibleBook.name}} <span class="description">{{bibleBook.nameLong}}</span></div>
      <p></p>
      <div class="chapter" v-for="chapter in bibleBook.chapters" :key="chapter?.id">
        <router-link class="chapter-link" :to="{ name: 'BookChapter', params: { bibleId: bibleInfo.id, chapterId: chapter?.id } }">{{ chapter?.number }}</router-link>
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
<style scoped>
header h1 {
  font-size: 1.5em;
  color: #00a2ff;
}
div.book {
  color: #c0c0c0;
  font-weight: bold;
}
span.description {
  color: #777777;
}
div.chapter {
  padding: 4px;
  float: left;
}
.book-list {
  width: 100%;
  float: left;
}
</style>
