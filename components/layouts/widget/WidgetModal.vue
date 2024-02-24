<script setup lang="ts">
const HandleCloseSite = ():any =>{
    window.close();
}
</script>
<template>
  <div class="modal_bg">
    <div class="flex justify-center m-16">
      <div
        class="w-96 h-96 bg-blue-100 rounded-xl flex flex-col items-center pt-16 gap-10"
      >
        <h1 class="text-xl p-2 text-center">Ведутся технические работы</h1>
        <h1 class="text-xl p-2 text-center">
          Актуальный прогноз погоды будет доступен через час
        </h1>
        <button
          class="w-36 p-3 bg-blue-400 rounded-xl"
          @click="HandleCloseSite"
        >
          Закрыть сайт
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal_bg {
  background-color: rgb(27, 27, 28);
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}
</style>
