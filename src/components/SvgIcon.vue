<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <svg>
    <use :xlink:href="'#' + props.name" />
  </svg>
</template>
