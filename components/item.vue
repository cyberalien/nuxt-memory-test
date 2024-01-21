<script setup lang="ts">
import { computed } from "#imports";
import { base, fileCount, dirCount } from "../data/config";

const { dir, file } = defineProps<{
  dir: string;
  file: string;
}>();

const dirNum = computed(() => parseInt(dir, base));
const fileNum = computed(() => parseInt(file, base));
</script>

<template>
  <NuxtLink :to="`/${dir}/`"> Parent </NuxtLink>
  <div v-for="i in fileCount" :key="i">
    <NuxtLink :to="`/${dir}/${i.toString(base)}/`">
      Page: {{ dirNum }} / {{ i }},
      <template v-for="j in i" :key="j">Test {{ j.toString(base) }}</template>
    </NuxtLink>
  </div>
  <div v-for="i in dirCount" :key="i">
    <NuxtLink :to="`/${i.toString(base)}/${file}/`">
      Page: {{ i }} / {{ fileNum }}
      <template v-for="j in i" :key="j">Test {{ j.toString(base) }}</template>
    </NuxtLink>
  </div>
</template>
