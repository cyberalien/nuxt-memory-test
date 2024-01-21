<script setup lang="ts">
const router = useRouter();
const currentRoute = router.currentRoute;

const props = computed<{
  dir: string;
  file: string;
}>(() => {
  const dirValue = currentRoute.value.params.dir;
  const fileValue = currentRoute.value.params.file;
  if (typeof dirValue === "string" && typeof fileValue === "string") {
    return {
      dir: dirValue,
      file: fileValue,
    };
  }
  return {
    dir: "0",
    file: "0",
  };
});
</script>
<template>
  <Item v-bind="props" />
</template>
