<template>
  <div class="shadow-2xl rounded-xl p-2 bg-blue-50">
    <div class="flex p-1 pl-5 gap-2">
      <p class="text-lg">
        {{ props.prop[props.control].time }}
        <span>{{ props.prop[props.control].dayTime }}</span>
      </p>
    </div>
    <div class="flex flex-wrap items-center gap-3" v-if="true">
      <div class="p-5 flex gap-3">
        <img
          :src="props.prop[0].image"
          alt="logo"
          class="bg-blue-300 rounded-lg"
        />
        <div class=" ">
          <h1 class="text-5xl">
            {{ props.prop[props.control].temp }} <span> &#8451; </span>
          </h1>
          <h1 class="text-xl pt-2">
            {{ props.prop[props.control].precipitation }}
          </h1>
        </div>
      </div>
      <div class="">
        <h1 class="text-center text-xl pb-2">Подробно:</h1>
        <p>
          Температура:
          <span> {{ props.prop[props.control].temp }} </span> &#8451;
        </p>
        <p>
          Минимальная температура:
          <span> {{ props.prop[props.control].minTemp }} </span> &#8451;
        </p>
        <p>
          Максимальная температура:
          <span> {{ props.prop[props.control].maxTemp }} </span> &#8451;
        </p>
        <p>
          Скорость ветра:
          <span>{{ props.prop[props.control].windSpeed }}</span> м/с
        </p>
        <p>
          Влажность: <span>{{ props.prop[props.control].humidity }}</span> %
        </p>
        <p>
          Осадки: <span> {{ props.prop[props.control].precipitation }}</span>
        </p>
        <p>
          Облачность: <span> {{ props.prop[props.control].cloudy }} </span> %
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { dtWeather } from "./interface";
const props = defineProps({
  prop: {
    type: Array<dtWeather>,
    required: true,
  },
  control: {
    type: Number,
    required: true,
  },
});
</script>
