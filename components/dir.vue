<script setup lang="ts">
import { computed } from "#imports";
import { base, fileCount } from "../data/config";

const { dir } = defineProps<{
  dir: string;
}>();

const dirNum = computed(() => parseInt(dir, base));
</script>

<template>
  <NuxtLink to="/"> Parent </NuxtLink>
  <div v-for="i in fileCount" :key="i">
    <NuxtLink :to="`/${dir}/${i.toString(base)}/`">
      Page: {{ dirNum }} / {{ i }}
    </NuxtLink>
  </div>
</template>
