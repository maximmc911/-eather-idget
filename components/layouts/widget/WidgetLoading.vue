    <script setup lang='ts'>
    const props = defineProps({
  prop: {
    type: Boolean,
    required: true,
  },
    })
    </script>
<template>
       <div v-if="props.prop"  > <!-- :to="props.to" -->
    <div ref="rootElementRef" class="app-spinner" >
      <div class="app-spinner__overlay" />
      <div class="app-spinner__icon" />
    </div>
  </div >

  
</template>
    
    
<style scoped>

.app-spinner {
         background-color: rgb(59, 39, 235);
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;

    &:focus {
      outline: none;
    }

    &__icon {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      width: 80px;
      height: 80px;
      background-repeat: no-repeat;
      background-size: contain;
      animation: spinnerAnimation 0.8s infinite linear;
      background-image: url("../../../public/spinner-icon.svg");
    }

    &__overlay {
      width: 100%;
      height: 100%;
      background-color: rgba(white, 0.7);
    }

    &--fullscreen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }

  @keyframes spinnerAnimation {
    0% {
      transform: translate(-50%, -50%) rotate(0);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

</style>