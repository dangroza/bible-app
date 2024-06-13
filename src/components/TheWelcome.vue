<script setup>
import { RouterLink } from "vue-router";
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Dumitru Cornilescu</template>
    Versiunea implicita in limba romana
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>King James Version</template>
    Versiunea implicita in engleza:
    <RouterLink to="bible/de4e12af7f28f599-02">KJV</RouterLink>
  </WelcomeItem>
</template>
