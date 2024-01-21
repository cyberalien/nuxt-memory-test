<script setup lang="ts">
const router = useRouter();
const currentRoute = router.currentRoute;

const dir = computed(() => {
  const value = currentRoute.value.params.dir;
  if (typeof value === "string") {
    return value;
  }
  return "0";
});

const file = computed<string | null>(() => {
  const value = currentRoute.value.params.file;
  if (typeof value === "string") {
    return value;
  }
  return null;
});
</script>
<template>
  <Item v-if="file" :dir="dir" :file="file" />
  <Dir v-else :dir="dir" />
</template>
