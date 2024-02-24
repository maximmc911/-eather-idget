<script setup lang="ts">
const props = defineProps({
  prop: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div :class="props.prop.isActive ? `card_active` : `card`">
    <p class="text-base">{{ props.prop.time }}</p>
    <p>{{ props.prop.dayTime }}</p>
    <img :src="props.prop.image" alt="logo" class="bg-blue-300 rounded-lg" />
    <h1 class="text-xl font-semibold">
      {{ props.prop.temp }}<span> &#8451; </span>
    </h1>
    <h1 class="text-sm">{{ props.prop.precipitation }}</h1>
  </div>
</template>

<style scoped>
.card,
.card_active {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 120px;
  border-radius: 15px;
}
.card {
  background: rgb(191 219 254);
  border: none;
  transform: scale(1);
  transition: 1s;
}
.card_active {
  background: rgb(123, 181, 251);
  border: 1px solid blue;
  transform: scale(1.05);
  transition: 1s;
}
</style>
