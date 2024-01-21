<script setup lang="ts">
import { computed } from "#imports";
import { base, fileCount, dirCount } from "../data/config";
</script>

<template>
  <div v-for="i in dirCount" :key="i">
    <NuxtLink :to="`/${i.toString(base)}/`"> Dir: {{ i }} </NuxtLink>
  </div>
</template>
